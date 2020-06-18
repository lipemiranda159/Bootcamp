class SalaryState {
  fullSalary!: number;

  constructor(value: number) {
    if (value === 0) {
      this.fullSalary = 1000;
    } else {
      this.fullSalary = value;
    }
  }
}

export default SalaryState;
