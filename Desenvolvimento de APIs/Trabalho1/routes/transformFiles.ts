import express, { NextFunction, text } from "express";
import Constants from "../Constants";
import FileService from "../Services/FileService";

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
  const stateData = await FileService.getFileData(Constants.stateFile);
  const cityData = await FileService.getFileData(Constants.cityFile);
  const states = JSON.parse(stateData);
  const cities = JSON.parse(cityData);

  states.forEach(async (state: any) => {
    let data = cities.filter((city: any) => city.Estado === state.ID);
    await FileService.writeFileData(
      `${Constants.processedPath}/${state.Sigla}.json`,
      JSON.stringify(data)
    );
  });

  res.send(states);
});

export default transfromFileRouter;
