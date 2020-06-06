"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfromFileRouter = void 0;
const express_1 = __importDefault(require("express"));
const Constants_1 = __importDefault(require("../Constants"));
const FileService_1 = __importDefault(require("../Services/FileService"));
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
    const states = await FileService_1.default.getFileData(Constants_1.default.stateFile);
    const cities = await FileService_1.default.getFileData(Constants_1.default.cityFile);
    states.forEach(async (state) => {
        let data = cities.filter((city) => city.Estado === state.ID);
        await FileService_1.default.writeFileData(`${Constants_1.default.processedPath}/${state.Sigla}.json`, JSON.stringify(data));
    });
    res.send(states);
});
exports.default = exports.transfromFileRouter;
//# sourceMappingURL=transformFiles.js.map