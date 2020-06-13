"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Constants_1 = __importDefault(require("../constants/Constants"));
const grades_json_1 = __importDefault(require("../data/grades.json"));
const writeFile = fs_1.promises.writeFile;
class FileService {
    static getFileData() {
        return grades_json_1.default;
    }
    static async writeFileData(data) {
        await writeFile(Constants_1.default.gradesFile, data);
    }
}
exports.default = FileService;
//# sourceMappingURL=FileService.js.map