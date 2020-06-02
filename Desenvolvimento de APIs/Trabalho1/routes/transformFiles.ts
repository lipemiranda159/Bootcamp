import express, { NextFunction, text } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const writeFile = promises.writeFile;
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
  const stateData = await readFile("./files/Estados.json", "utf8");
  const cityData = await readFile("./files/Cidades.json", "utf8");
  const datas = JSON.parse(stateData);

  res.send("Ok");
});

transfromFileRouter.get("/:code", (req, res) => {});

export default transfromFileRouter;
