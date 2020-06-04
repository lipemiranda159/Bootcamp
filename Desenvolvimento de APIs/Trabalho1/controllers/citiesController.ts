import { Request, Response } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const processedPath = "./files/processed";
const encoding = "utf8";

class CitiesController {
  async getUfCitiesLength(request: Request, response: Response) {
    let { uf } = request.params;
    let city = await readFile(`${processedPath}/${uf}.json`, encoding);
    response.status(200).send({ length: city.length });
  }
}

export default CitiesController;
