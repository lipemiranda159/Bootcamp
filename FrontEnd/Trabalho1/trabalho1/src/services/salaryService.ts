import inssTable from "./model/inssTable";
import SalaryState from "../models/salaryState";

class SalaryService {
  private static round(value: number) {
    return +value.toFixed(2);
  }

  private static calculateDiscountINSS(baseINSS: number) {
    let discountINSS = 0;

    if (baseINSS > 6101.07) {
      return 713.1;
    }

    for (var i = 0; i < inssTable.values.length; i++) {
      var currentItem = inssTable.values[i];
      let discountValue = 0;

      if (baseINSS > currentItem.maxValue) {
        // prettier-ignore
        discountValue = 
          SalaryService.round(currentItem.difference * currentItem.discountPercentage);

        discountINSS += discountValue;
      } else {
        // prettier-ignore
        discountValue = 
          SalaryService.round((baseINSS - currentItem.minValue) * currentItem.discountPercentage);

        discountINSS += discountValue;
        break;
      }
    }

    discountINSS = SalaryService.round(discountINSS);

    return discountINSS;
  }

  private static calculateDiscountIRPF(baseIRPF: number) {
    let discountIRPF =
      baseIRPF < 1903.98
        ? 0
        : baseIRPF < 2826.65
        ? SalaryService.round(baseIRPF * 0.075) - 142.8
        : baseIRPF < 3751.05
        ? SalaryService.round(baseIRPF * 0.15) - 354.8
        : baseIRPF < 4664.68
        ? SalaryService.round(baseIRPF * 0.225) - 636.13
        : SalaryService.round(baseIRPF * 0.275) - 869.36;

    discountIRPF = SalaryService.round(discountIRPF);

    return discountIRPF;
  }

  public static calcSalary(fullSalary: number) {
    const baseINSS = fullSalary;
    const discountINSS = SalaryService.calculateDiscountINSS(baseINSS);

    const baseIRPF = baseINSS - discountINSS;
    const discountIRPF = SalaryService.calculateDiscountIRPF(baseIRPF);

    const netSalary = baseINSS - discountINSS - discountIRPF;

    const formater = Intl.NumberFormat("pt-br");
    let salaryState = new SalaryState(fullSalary);
    salaryState.InssPercent = this.round((discountINSS * 100) / fullSalary);
    salaryState.IprfPercent = this.round((discountIRPF * 100) / fullSalary);

    salaryState.BaseInss = `R$ ${formater.format(baseINSS)}`;
    salaryState.BaseIprf = `R$ ${formater.format(baseIRPF)}`;
    salaryState.DescInss = `R$ ${formater.format(discountINSS)} (${
      salaryState.InssPercent
    }%)`;
    salaryState.DescIprf = `R$ ${formater.format(discountIRPF)} (${
      salaryState.IprfPercent
    }%)`;
    salaryState.SalLiq = `R$ ${formater.format(netSalary)}`;
    return salaryState;
  }
}
export { SalaryService };
