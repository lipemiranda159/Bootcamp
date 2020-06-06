import FileService from "../Services/FileService";
import Constants from "../Constants";
import ArrayOrderService from "../Services/ArrayOrderService";

class ProcessFileService {
  public static async getCitesCount(citiesOrderBy: number) {
    let states = await FileService.getFileData(Constants.stateFile);
    let statesCities: any[] = [];
    const promises = states.map(async (state: any) => {
      let cities = await FileService.getFileData(
        `${Constants.processedPath}/${state.Sigla}.json`
      );
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

export default ProcessFileService;
