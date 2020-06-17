export default class inssTable {
  public static readonly values = [
    {
      id: 1,
      minValue: 0,
      maxValue: 1045,
      difference: 1045 - 0,
      discountPercentage: 0.075,
      discountValue: -1,
    },
    {
      id: 2,
      minValue: 1045.01,
      maxValue: 2089.6,
      difference: 2089.6 - 1045,
      discountPercentage: 0.09,
    },
    {
      id: 3,
      minValue: 2089.61,
      maxValue: 3134.4,
      difference: 3134.4 - 2089.6,
      discountPercentage: 0.12,
    },
    {
      id: 4,
      minValue: 3134.41,
      maxValue: 6101.06,
      difference: 6101.06 - 3134.4,
      discountPercentage: 0.14,
    },
  ];
}
