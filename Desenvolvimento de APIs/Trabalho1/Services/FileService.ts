import { promises } from "fs";

const readFile = promises.readFile;
const encoding = "utf8";

class FileService {
  public async getFileData(fileName: string) {
    return await readFile(fileName, encoding);
  }
}

export default FileService;
