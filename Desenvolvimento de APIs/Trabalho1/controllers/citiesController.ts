import { Request, Response } from "express";
import FileService from "../Services/FileService";
import ProcessFileService from "../Services/ProcessFileService";
import ArrayOrderService from "../Services/ArrayOrderService";
import Constants from "../Constants";
import UtilService from "../Services/UtilsService";
const processedPath = "./files/processed";

class CitiesController {
  async getUfCitiesLength(request: Request, response: Response) {
    try {
      let { uf } = request.params;
      let city = await FileService.getFileData(`${processedPath}/${uf}.json`);
      response.status(200).send({ length: city.length });
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }

  async getTopFiveStates(request: Request, response: Response) {
    try {
      let statesCities = await ProcessFileService.getCitesCount(
        Constants.Descending
      );
      statesCities = ArrayOrderService.orderByNumberDescending(statesCities);

      let result = await UtilService.returnTopFive(statesCities);
      response.status(200).send({ response: result });
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }

  async getLastFiveStates(request: Request, response: Response) {
    try {
      let statesCities = await ProcessFileService.getCitesCount(
        Constants.Descending
      );
      statesCities = ArrayOrderService.orderByNumberAscending(statesCities);
      let result = await UtilService.returnTopFive(statesCities);

      response.status(200).send({
        response: ArrayOrderService.orderByNumberDescending(result),
      });
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }

  async getOrderedDescNames(request: Request, response: Response) {
    try {
      let statesCities = await ProcessFileService.getCitesCount(
        Constants.Descending
      );
      let orderedList = await UtilService.getCitiesData(statesCities);
      let result: any[] = [];
      orderedList.forEach((data: any) => {
        let orderedData = ArrayOrderService.orderByStringDescending(data);
        result.push(orderedData[0]);
      });
      response.status(200).send(result);
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }

  async getOrderedDescName(request: Request, response: Response) {
    try {
      let statesCities = await ProcessFileService.getCitesCount(
        Constants.Descending
      );
      let result = ArrayOrderService.orderByStringDescending(
        await UtilService.getCityData(statesCities)
      );

      response.status(200).send(result[0]);
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }

  async getOrderedAscNames(request: Request, response: Response) {
    try {
      let statesCities = await ProcessFileService.getCitesCount(
        Constants.Ascending
      );
      let orderedList = await UtilService.getCitiesData(statesCities);
      let result: any[] = [];
      orderedList.forEach((data: any) => {
        let orderedData = ArrayOrderService.orderByStringAscending(data);
        result.push(orderedData[0]);
      });

      response.status(200).send(result);
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }

  async getOrderedAscName(request: Request, response: Response) {
    console.log("test");
    try {
      let statesCities = await ProcessFileService.getCitesCount(
        Constants.Ascending
      );
      let result = ArrayOrderService.orderByStringAscending(
        await UtilService.getCityData(statesCities)
      );

      response.status(200).send(result[0]);
    } catch (err) {
      response.status(500).send({ error: err.stack });
    }
  }
}

export default CitiesController;
