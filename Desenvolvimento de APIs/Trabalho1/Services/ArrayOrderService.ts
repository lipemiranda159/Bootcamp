class ArrayOrderService {
  public static orderByAscending(array: any[]) {
    return array.sort(function (a, b) {
      return a.CountCities - b.CountCities;
    });
  }

  public static orderByDescending(array: any[]) {
    return array.sort(function (a, b) {
      return b.CountCities - a.CountCities;
    });
  }
}

export default ArrayOrderService;
