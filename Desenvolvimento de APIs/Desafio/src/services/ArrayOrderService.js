"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayOrderService {
    static orderByNumberDescending(array) {
        return array.sort(function (a, b) {
            return b.value - a.value;
        });
    }
}
exports.default = ArrayOrderService;
//# sourceMappingURL=ArrayOrderService.js.map