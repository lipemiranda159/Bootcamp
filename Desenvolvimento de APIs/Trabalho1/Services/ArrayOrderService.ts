class ArrayOrderService {
  public static orderByNumberAscending(array: any[]) {
    return array.sort(function (a, b) {
      return a.CountCities - b.CountCities;
    });
  }

  public static orderByNumberDescending(array: any[]) {
    return array.sort(function (a, b) {
      return b.CountCities - a.CountCities;
    });
  }

  public static orderByStringAscending(array: any[]) {
    return array.sort(function (a, b) {
      return a.CityName.length - b.CityName.length;
    });
  }

  public static orderByStringDescending(array: Array<any>) {
    return array.sort(function (a, b) {
      return b.CityName.length - a.CityName.length;
    });
  }
}

export default ArrayOrderService;
