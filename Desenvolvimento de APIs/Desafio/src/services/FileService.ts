import { promises } from "fs";
import Constants from "../constants/Constants";

const readFile = promises.readFile;
const writeFile = promises.writeFile;

class FileService {
  public static async getFileData() {
    return JSON.parse(await readFile(Constants.gradesFile, Constants.encoding));
  }

  public static async writeFileData(data: string) {
    await writeFile(Constants.gradesFile, data);
  }
}

export default FileService;
