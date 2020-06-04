import { Request, Response } from "express";
import FileService from "../Services/FileService";
const processedPath = "./files/processed";
const filesPath = "./files";

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
      let states = await FileService.getFileData(`${filesPath}/Estados.json`);
      let statesCities: any[] = [];
      const promises = states.map(async (state: any) => {
        let cities = await FileService.getFileData(
          `${processedPath}/${state.Sigla}.json`
        );
        statesCities.push({ Uf: state.Sigla, CountCities: cities.length });
      });
      await Promise.all(promises);
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
