import { promises } from "fs";
import path from "path";
import Constants from "../constants/Constants";
import data from "../data/grades.json";

const writeFile = promises.writeFile;

class FileService {
  public static getFileData() {
    return data;
  }

  public static async writeFileData(data: string) {
    await writeFile(Constants.gradesFile, data);
  }
}

export default FileService;
