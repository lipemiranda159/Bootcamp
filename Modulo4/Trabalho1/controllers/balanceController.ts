import { Request, Response, request } from "express";
import accountNotFoundException from "../exceptions/accountNotFoundException";
import insuficientBalanceException from "../exceptions/InsuficientBalanceException";
import AccountService from "../services/AccountService";

class balanceController {
  private accountService: AccountService;
  private NoFilterBalance = undefined;
  constructor() {
    this.accountService = new AccountService();
  }

  getBalances = async (request: Request, response: Response) => {
    try {
      const { take, order } = request.query;
      let result = await this.accountService.GetAllBalances(
        this.NoFilterBalance
      );
      if (order) {
        if (order === "0") {
          result = result.sort(function (a: any, b: any) {
            return a.balance - b.balance;
          });
        } else {
          result = result.sort(function (a: any, b: any) {
            return b.balance - a.balance;
          });
        }
      }
      if (take) {
        result = result.slice(0, parseInt(take.toString()));
      }
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
      const result = await this.accountService.getBalance(conta, agencia);
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
      const result = await this.accountService.getBalance(conta, agencia);
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

  getAverageBalance = async (request: Request, response: Response) => {
    try {
      const { agencia } = request.body;
      response.send({
        average: await this.accountService.getAverageBalance(agencia),
      });
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  transferBalance = async (request: Request, response: Response) => {
    try {
      const { contaOrig, contaDest, balance } = request.body;
      response.send(
        await this.accountService.transferBalance(contaOrig, contaDest, balance)
      );
    } catch (e) {
      const codeError = this.getErrorCode(e);
      response.status(codeError).send({ res: `${e}` });
    }
  };

  transferToPrivate = async (request: Request, response: Response) => {
    try {
      response.send(await this.accountService.transferAccountAgencyPrivate());
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
