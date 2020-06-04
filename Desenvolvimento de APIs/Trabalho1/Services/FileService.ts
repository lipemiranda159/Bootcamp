import { promises } from "fs";
import Constants from "../Constants";

const readFile = promises.readFile;
const writeFile = promises.writeFile;

class FileService {
  public static async getFileData(fileName: string) {
    return await readFile(fileName, Constants.encoding);
  }

  public static async writeFileData(fileName: string, data: string) {
    await writeFile(fileName, data);
  }
}

export default FileService;
