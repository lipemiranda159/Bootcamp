class ValueState {
  InitAmount: number;
  TaxMonth: number;
  Period: number[];

  /**
   *
   */
  constructor() {
    this.InitAmount = 0;
    this.TaxMonth = 0;
    this.Period = [0];
  }
}

export default ValueState;
