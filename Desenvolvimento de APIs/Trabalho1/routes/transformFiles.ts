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
/**
 * @api [post] /generateFiles
 * summary: Generate state files
 * tags: [Transform File]
 * responses:
 *  "200":
 *      description: "Notification created"
 *  "500":
 *      description: "Internal server error"
 */
transfromFileRouter.get("/generateFiles", async (_, res) => {
  const states = await FileService.getFileData(Constants.stateFile);
  const cities = await FileService.getFileData(Constants.cityFile);

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
