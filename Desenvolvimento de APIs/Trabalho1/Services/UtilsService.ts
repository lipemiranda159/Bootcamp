class UtilsService {
  public static async returnTopFive(statesCities: any) {
    statesCities = statesCities.slice(0, 5);

    const promises = statesCities.map(async (state: any) => {
      return {
        UF: state.Uf,
        CountCities: state.CountCities,
      };
    });

    let result = await Promise.all(promises);
    return result;
  }

  public static async getCitiesData(statesCities: any) {
    let result = statesCities.map((stateCity: any) => {
      return stateCity.cities.map((city: any) => {
        return { CityName: city.Nome, UF: stateCity.Uf };
      });
    });
    return result;
  }

  public static async getCityData(statesCities: any) {
    let result: any[] = [];
    statesCities.map((stateCity: any) => {
      stateCity.cities.map((city: any) => {
        result.push({ CityName: city.Nome, UF: stateCity.Uf });
      });
    });
    return result;
  }
}

export default UtilsService;
