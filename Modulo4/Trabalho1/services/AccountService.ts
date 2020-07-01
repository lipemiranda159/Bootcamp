import insuficientBalanceException from "../exceptions/InsuficientBalanceException";

class AccountService {
  public DepositBalance(OldBalance: number, value: number) {
    return OldBalance + value;
  }
  public CashWithdrawalBalance(OldBalance: number, value: number) {
    if (OldBalance >= value + 1) {
      return OldBalance - value - 1;
    } else {
      throw new insuficientBalanceException("Insuficient balance!");
    }
  }
}

export default AccountService;
