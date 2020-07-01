import insuficientBalanceException from "../exceptions/InsuficientBalanceException";
import databaseService from "./databaseService";
import accountNotFoundException from "../exceptions/accountNotFoundException";

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

  GetAllBalances = async () => {
    return await this.dbContext.getAllBalances();
  };

  getBalance = async (account: number, agency: number) => {
    const result = await this.dbContext.getAccount({ account, agency });
    if (result) {
      return result;
    } else {
      throw new accountNotFoundException("Account or agency not found!");
    }
  };

  deleteBalance = async (account: number, agency: number) => {
    await this.dbContext.deleteAccount({ account, agency });
    const result = await this.dbContext.getAccount({ agency });
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
}

export default AccountService;
