class FormatService {
  private static numberFormater = Intl.NumberFormat("pt-br", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
  private static taxFormater = Intl.NumberFormat("pt-br", {
    minimumFractionDigits: 2,
    style: "percent",
  });

  public static FormatCurrency(value: number) {
    return this.numberFormater.format(value);
  }

  public static FormatPercent(value: number) {
    return this.taxFormater.format(value);
  }
}

export default FormatService;
