"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileService_1 = __importDefault(require("../Services/FileService"));
const ProcessFileService_1 = __importDefault(require("../Services/ProcessFileService"));
const ArrayOrderService_1 = __importDefault(require("../Services/ArrayOrderService"));
const Constants_1 = __importDefault(require("../Constants"));
const UtilsService_1 = __importDefault(require("../Services/UtilsService"));
const processedPath = "./files/processed";
class CitiesController {
    async getUfCitiesLength(request, response) {
        try {
            let { uf } = request.params;
            let city = await FileService_1.default.getFileData(`${processedPath}/${uf}.json`);
            response.status(200).send({ length: city.length });
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
    async getTopFiveStates(request, response) {
        try {
            let statesCities = await ProcessFileService_1.default.getCitesCount(Constants_1.default.Descending);
            statesCities = ArrayOrderService_1.default.orderByNumberDescending(statesCities);
            let result = await UtilsService_1.default.returnTopFive(statesCities);
            response.status(200).send({ response: result });
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
    async getLastFiveStates(request, response) {
        try {
            let statesCities = await ProcessFileService_1.default.getCitesCount(Constants_1.default.Descending);
            statesCities = ArrayOrderService_1.default.orderByNumberAscending(statesCities);
            let result = await UtilsService_1.default.returnTopFive(statesCities);
            response.status(200).send({
                response: ArrayOrderService_1.default.orderByNumberDescending(result),
            });
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
    async getOrderedDescNames(request, response) {
        try {
            let statesCities = await ProcessFileService_1.default.getCitesCount(Constants_1.default.Descending);
            let orderedList = await UtilsService_1.default.getCitiesData(statesCities);
            let result = [];
            orderedList.forEach((data) => {
                let orderedData = ArrayOrderService_1.default.orderByStringDescending(data);
                result.push(orderedData[0]);
            });
            response.status(200).send(result);
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
    async getOrderedDescName(request, response) {
        try {
            let statesCities = await ProcessFileService_1.default.getCitesCount(Constants_1.default.Descending);
            let result = ArrayOrderService_1.default.orderByStringDescending(await UtilsService_1.default.getCityData(statesCities));
            response.status(200).send(result[0]);
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
    async getOrderedAscNames(request, response) {
        try {
            let statesCities = await ProcessFileService_1.default.getCitesCount(Constants_1.default.Ascending);
            let orderedList = await UtilsService_1.default.getCitiesData(statesCities);
            let result = [];
            orderedList.forEach((data) => {
                let orderedData = ArrayOrderService_1.default.orderByStringAscending(data);
                result.push(orderedData[0]);
            });
            response.status(200).send(result);
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
    async getOrderedAscName(request, response) {
        console.log("test");
        try {
            let statesCities = await ProcessFileService_1.default.getCitesCount(Constants_1.default.Ascending);
            let result = ArrayOrderService_1.default.orderByStringAscending(await UtilsService_1.default.getCityData(statesCities));
            response.status(200).send(result[0]);
        }
        catch (err) {
            response.status(500).send({ error: err.stack });
        }
    }
}
exports.default = CitiesController;
//# sourceMappingURL=citiesController.js.map