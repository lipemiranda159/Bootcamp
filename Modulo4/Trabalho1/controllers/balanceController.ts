import { Request, Response } from "express";
import databaseService from "../services/databaseService";
class balanceController {
  public dbContext = new databaseService();
  constructor() {
    this.dbContext
      .connect()
      .then(() => {
        console.log("conectado com sucesso");
      })
      .catch(() => console.log("error"));
  }

  getBalances = async (request: Request, response: Response) => {
    try {
      const result = await this.dbContext.getBalances();
      response.send({ res: result, log: "passou aqui" });
    } catch (error) {
      response.send({ res: `err: ${error}` });
    }
  };
}

export default balanceController;
