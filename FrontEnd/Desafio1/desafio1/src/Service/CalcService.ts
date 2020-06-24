class CalcService {
  public static GetMontant(
    InitAmount: number,
    TaxMonth: number,
    Period: number
  ) {
    return InitAmount * Math.pow(1 + TaxMonth / 100, Period);
  }

  public static GetTax(InitAmount: number, Amount: number) {
    return Amount / InitAmount;
  }
}

export default CalcService;
