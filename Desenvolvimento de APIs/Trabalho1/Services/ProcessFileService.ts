import FileService from "../Services/FileService";

const processedPath = "./files/processed";
const filesPath = "./files";

class ProcessFileService {
  public static async getCitesCount() {
    let states = await FileService.getFileData(`${filesPath}/Estados.json`);
    let statesCities: any[] = [];
    const promises = states.map(async (state: any) => {
      let cities = await FileService.getFileData(
        `${processedPath}/${state.Sigla}.json`
      );
      statesCities.push({ Uf: state.Sigla, CountCities: cities.length });
    });

    await Promise.all(promises);
    return statesCities;
  }
}

export default ProcessFileService;
