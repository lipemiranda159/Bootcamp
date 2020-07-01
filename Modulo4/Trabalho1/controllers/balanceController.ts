import { Request, Response } from "express";
import databaseService from "../services/databaseService";
import accountNotFoundException from "../exceptions/accountNotFoundException";
import insuficientBalanceException from "../exceptions/InsuficientBalanceException";
import AccountService from "../services/AccountService";
import { balanceRouter } from "../routes/balanceRouter";
class balanceController {
  private dbContext = new databaseService();
  private accountService = new AccountService();

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
        result.balance = this.accountService.DepositBalance(
          result.balance,
          balance
        );
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
  withdrawalAccount = async (request: Request, response: Response) => {
    const { agencia, conta, balance } = request.body;
    try {
      const result = await this.dbContext.getAccount({ agencia, conta });
      if (result) {
        result.balance = this.accountService.CashWithdrawalBalance(
          result.balance,
          balance
        );
        result.save();
        response.send(result);
      } else {
        throw new accountNotFoundException("Account or agency not found!");
      }
    } catch (e) {
      let codeError = 500;
      codeError = this.getErrorCode(e, codeError);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  private getErrorCode(e: any, codeError: number) {
    if (e instanceof accountNotFoundException) {
      codeError = 204;
    } else if (e instanceof insuficientBalanceException) {
      codeError = 400;
    }
    return codeError;
  }
}

export default balanceController;
