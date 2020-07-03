import insuficientBalanceException from "../exceptions/InsuficientBalanceException";
import databaseService from "./databaseService";
import accountNotFoundException from "../exceptions/accountNotFoundException";
import { response } from "express";

class AccountService {
  private dbContext = new databaseService();

  constructor() {
    this.dbContext
      .connect()
      .then(() => {
        console.log("conectado com sucesso");
      })
      .catch(() => console.log("error"));
  }

  GetAllBalances = async (filter: any | undefined) => {
    return await this.dbContext.getAllBalances(filter);
  };

  GetAllByAgency = async (agencia: number) => {
    return await this.dbContext.getAllByAgency(agencia);
  };
  getAccount = async (agencia: number) => {
    const result = await this.dbContext.getAccount({ agencia });
    if (result) {
      return result;
    } else {
      throw new accountNotFoundException("Agency not found!");
    }
  };

  getBalance = async (conta: number, agencia: number) => {
    const result = await this.dbContext.getAccount({ conta, agencia });
    if (result) {
      return result;
    } else {
      throw new accountNotFoundException("Account or agency not found!");
    }
  };

  getAverageBalance = async (agencia: number) => {
    const result = await this.GetAllByAgency(agencia);
    if (result) {
      const countAccount = result.length;
      const sum = result
        .map((account: any) => account.balance)
        .reduce((acc: any, cur: any) => acc + cur);
      return sum / countAccount;
    } else {
      throw new accountNotFoundException("Account or agency not found!");
    }
  };

  deleteBalance = async (conta: number, agencia: number) => {
    await this.dbContext.deleteAccount({ conta, agencia });
    const result = await this.dbContext.getAllBalances({ agencia });
    return result.length;
  };

  DepositBalance = (OldBalance: number, value: number) => {
    return OldBalance + value;
  };

  CashWithdrawalBalance = (OldBalance: number, value: number) => {
    if (OldBalance >= value + 1) {
      return OldBalance - value - 1;
    } else {
      throw new insuficientBalanceException("Insuficient balance!");
    }
  };
  transferBalance = async (
    contaOrig: number,
    contaDest: number,
    balance: number
  ) => {
    const origAccount = await this.getAccount(contaOrig);
    const destAccount = await this.getAccount(contaDest);

    if (origAccount.agencia !== destAccount.agencia) {
      origAccount.balance = origAccount.balance - 8 - balance;
    } else {
      origAccount.balance = origAccount.balance - balance;
    }
    destAccount.balance = destAccount.balance + balance;
    origAccount.save();
    destAccount.save();
    return origAccount.balance;
  };

  transferAccountAgencyPrivate = async () => {
    let accounts = null;
    try {
      accounts = await this.dbContext.getAccount({ agencia: 99 });

      if (!accounts) {
        const agencys = await this.dbContext.aggregateByAgency();

        for (let agency of agencys) {
          let account = await this.dbContext.getTransferPrivateAccount(
            { agencia: agency._id },
            { balance: -1 },
            1
          );
          account[0].agencia = 99;
          account[0].save();
        }
      }
    } catch (error) {
      return error;
    }
    accounts = await this.dbContext.getAccount({ agencia: 99 });

    return accounts;
  };
}

export default AccountService;
