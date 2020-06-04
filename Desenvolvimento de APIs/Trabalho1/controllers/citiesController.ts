import { Request, Response } from "express";
import FileService from "../Services/FileService";
const processedPath = "./files/processed";
const filesPath = "./files";

class CitiesController {
  async getUfCitiesLength(request: Request, response: Response) {
    let { uf } = request.params;
    let city = await FileService.getFileData(`${processedPath}/${uf}.json`);
    response.status(200).send({ length: city.length });
  }

  async getTopFiveStates(request: Request, response: Response) {
    let states = FileService.getFileData(`${filesPath}/Estados.json`);
  }
}

export default CitiesController;
