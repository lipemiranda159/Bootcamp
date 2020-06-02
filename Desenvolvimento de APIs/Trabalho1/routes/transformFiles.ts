import express, { NextFunction, text } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const stateFile = "./files/Estados.json";
const cityFile = "./files/Cidades.json";
const processedPath = "./files/processed";
const encoding = "utf8";
export const transfromFileRouter = express.Router();

var errorHandler = function (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) {
  console.log("LOGGED");
  try {
    next();
  } catch (err) {
    console.log(err.message);
  }
};

transfromFileRouter.use(errorHandler);

transfromFileRouter.get("/generateFiles", async (_, res) => {
  const stateData = await readFile(stateFile, encoding);
  const cityData = await readFile(cityFile, encoding);
  const states = JSON.parse(stateData);
  const cities = JSON.parse(cityData);

  states.forEach(async (state: any) => {
    let data = cities.filter((city: any) => city.Estado === state.ID);
    await writeFile(
      `${processedPath}/${state.Sigla}.json`,
      JSON.stringify(data)
    );
  });

  res.send(states);
});

transfromFileRouter.get("/:code", (req, res) => {});

export default transfromFileRouter;
