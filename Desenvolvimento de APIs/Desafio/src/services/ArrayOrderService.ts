class ArrayOrderService {
  public static orderByNumberDescending(array: any[]) {
    return array.sort(function (a, b) {
      return b.value - a.value;
    });
  }
}

export default ArrayOrderService;
