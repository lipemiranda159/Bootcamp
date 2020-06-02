"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfromFileRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const readFile = fs_1.promises.readFile;
exports.transfromFileRouter = express_1.default.Router();
var errorHandler = function (req, res, next) {
    console.log('LOGGED');
    try {
        next();
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.transfromFileRouter.use(errorHandler);
exports.transfromFileRouter.get("/generateFiles", async (_, res) => {
    let stateData = await readFile("./files/Estados.json", "utf8");
    console.log(stateData);
    var data = JSON.parse(stateData);
    res.send("Ok");
});
exports.transfromFileRouter.get("/:code", (req, res) => { });
exports.default = exports.transfromFileRouter;
//# sourceMappingURL=transformFiles.js.map