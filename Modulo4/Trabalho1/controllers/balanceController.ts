import { Request, Response } from "express";
import databaseService from "../services/databaseService";
import accountNotFoundException from "../exceptions/accountNotFoundException";
import insuficientBalanceException from "../exceptions/InsuficientBalanceException";
import AccountService from "../services/AccountService";
import { balanceRouter } from "../routes/balanceRouter";
class balanceController {
  private accountService = new AccountService();

  getBalances = async (request: Request, response: Response) => {
    try {
      const result = await this.accountService.GetAllBalances();
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  getBalance = async (request: Request, response: Response) => {
    try {
      const { agencia, conta } = request.params;

      const result = await this.accountService.getBalance(
        parseInt(agencia),
        parseInt(conta)
      );
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  depositAccount = async (request: Request, response: Response) => {
    const { agencia, conta, balance } = request.body;
    try {
      const result = await this.accountService.getBalance(agencia, conta);
      result.balance = this.accountService.DepositBalance(
        result.balance,
        balance
      );
      result.save();
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  withdrawalAccount = async (request: Request, response: Response) => {
    const { agencia, conta, balance } = request.body;
    try {
      const result = await this.accountService.getBalance(agencia, conta);
      result.balance = this.accountService.CashWithdrawalBalance(
        result.balance,
        balance
      );
      result.save();
      response.send(result);
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  deleteAccount = async (request: Request, response: Response) => {
    try {
      const { agencia, conta } = request.body;
      response.send(await this.accountService.deleteBalance(conta, agencia));
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  private getErrorCode(e: any) {
    let codeError = 500;

    if (e instanceof accountNotFoundException) {
      codeError = 204;
    } else if (e instanceof insuficientBalanceException) {
      codeError = 400;
    }
    return codeError;
  }
}

export default balanceController;
