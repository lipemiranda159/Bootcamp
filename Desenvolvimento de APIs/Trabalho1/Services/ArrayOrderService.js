"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayOrderService {
    static orderByNumberAscending(array) {
        return array.sort(function (a, b) {
            return a.CountCities - b.CountCities;
        });
    }
    static orderByNumberDescending(array) {
        return array.sort(function (a, b) {
            return b.CountCities - a.CountCities;
        });
    }
    static orderByStringAscending(array) {
        return array.sort(function (a, b) {
            return a.CityName.length - b.CityName.length;
        });
    }
    static orderByStringDescending(array) {
        return array.sort(function (a, b) {
            return b.CityName.length - a.CityName.length;
        });
    }
}
exports.default = ArrayOrderService;
//# sourceMappingURL=ArrayOrderService.js.map