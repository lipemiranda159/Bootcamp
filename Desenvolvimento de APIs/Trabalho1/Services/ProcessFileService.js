"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileService_1 = __importDefault(require("../Services/FileService"));
const Constants_1 = __importDefault(require("../Constants"));
class ProcessFileService {
    static async getCitesCount(citiesOrderBy) {
        let states = await FileService_1.default.getFileData(Constants_1.default.stateFile);
        let statesCities = [];
        const promises = states.map(async (state) => {
            let cities = await FileService_1.default.getFileData(`${Constants_1.default.processedPath}/${state.Sigla}.json`);
            statesCities.push({
                Uf: state.Sigla,
                cities: cities,
                CountCities: cities.length,
            });
        });
        await Promise.all(promises);
        return statesCities;
    }
}
exports.default = ProcessFileService;
//# sourceMappingURL=ProcessFileService.js.map