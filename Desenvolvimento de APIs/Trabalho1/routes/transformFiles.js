"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfromFileRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const readFile = fs_1.promises.readFile;
const writeFile = fs_1.promises.writeFile;
const stateFile = "./files/Estados.json";
const cityFile = "./files/Cidades.json";
const processedPath = "./files/processed";
const encoding = "utf8";
exports.transfromFileRouter = express_1.default.Router();
var errorHandler = function (req, res, next) {
    console.log("LOGGED");
    try {
        next();
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.transfromFileRouter.use(errorHandler);
exports.transfromFileRouter.get("/generateFiles", async (_, res) => {
    const stateData = await readFile(stateFile, encoding);
    const cityData = await readFile(cityFile, encoding);
    const states = JSON.parse(stateData);
    const cities = JSON.parse(cityData);
    states.forEach(async (state) => {
        let data = cities.filter((city) => city.Estado === state.ID);
        await writeFile(`${processedPath}/${state.Sigla}.json`, JSON.stringify(data));
    });
    res.send(states);
});
exports.default = exports.transfromFileRouter;
//# sourceMappingURL=transformFiles.js.map