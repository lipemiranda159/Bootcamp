import { Request, Response } from "express";
import databaseService from "../services/databaseService";
import accountNotFoundException from "../exceptions/accountNotFoundException";
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
      const result = await this.dbContext.getAllBalances();
      response.send(result);
    } catch (error) {
      response.send({ res: `err: ${error}` });
    }
  };

  depositAccount = async (request: Request, response: Response) => {
    const { agencia, conta, balance } = request.body;
    try {
      const result = await this.dbContext.getAccount({ agencia, conta });
      if (result) {
        result.balance = result.balance + balance;
        result.save();
        response.send(result);
      } else {
        throw new accountNotFoundException("Account or agency not found!");
      }
    } catch (e) {
      let codeError = 500;
      if (e instanceof accountNotFoundException) {
        codeError = 204;
      }
      response.status(codeError).send({ res: `${e}` });
    }
  };
}

export default balanceController;
