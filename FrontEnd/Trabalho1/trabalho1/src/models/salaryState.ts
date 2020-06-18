class SalaryState {
  fullSalary!: number;
  InssPercent!: number;
  IprfPercent!: number;
  BaseInss!: string;
  DescInss!: string;
  BaseIprf!: string;
  DescIprf!: string;
  SalLiq!: string;
  constructor(value: number) {
    if (value === 0) {
      this.fullSalary = 1000;
    } else {
      this.fullSalary = value;
    }
    this.InssPercent = 0;
    this.IprfPercent = 0;
  }
}

export default SalaryState;
