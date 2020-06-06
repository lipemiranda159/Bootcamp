"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilsService {
    static async returnTopFive(statesCities) {
        statesCities = statesCities.slice(0, 5);
        const promises = statesCities.map(async (state) => {
            return {
                UF: state.Uf,
                CountCities: state.CountCities,
            };
        });
        let result = await Promise.all(promises);
        return result;
    }
    static async getCitiesData(statesCities) {
        let result = statesCities.map((stateCity) => {
            return stateCity.cities.map((city) => {
                return { CityName: city.Nome, UF: stateCity.Uf };
            });
        });
        return result;
    }
    static async getCityData(statesCities) {
        let result = [];
        statesCities.map((stateCity) => {
            stateCity.cities.map((city) => {
                result.push({ CityName: city.Nome, UF: stateCity.Uf });
            });
        });
        return result;
    }
}
exports.default = UtilsService;
//# sourceMappingURL=UtilsService.js.map