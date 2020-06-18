class SalaryState {
  fullSalary!: number;
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
  }
}

export default SalaryState;
