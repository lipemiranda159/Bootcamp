import { Request, Response } from "express";
import FileService from "../Services/FileService";
import ProcessFileService from "../Services/ProcessFileService";
const processedPath = "./files/processed";

class CitiesController {
  async getUfCitiesLength(request: Request, response: Response) {
    try {
      let { uf } = request.params;
      let city = await FileService.getFileData(`${processedPath}/${uf}.json`);
      response.status(200).send({ length: city.length });
    } catch (err) {
      response.status(500).send({ error: err });
    }
  }

  async getTopFiveStates(request: Request, response: Response) {
    try {
      let statesCities = await ProcessFileService.getCitesCount();
      statesCities = statesCities
        .sort(function (a, b) {
          return b.CountCities - a.CountCities;
        })
        .slice(0, 5);
      response.status(200).send({ teste: statesCities });
    } catch (err) {
      response.status(500).send({ error: err });
    }
  }
}

export default CitiesController;
