"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesRouter = void 0;
const express_1 = __importDefault(require("express"));
const citiesController_1 = __importDefault(require("../controllers/citiesController"));
exports.citiesRouter = express_1.default.Router();
const citiesController = new citiesController_1.default();
exports.citiesRouter.get("/:uf", citiesController.getUfCitiesLength);
exports.citiesRouter.get("/count/topFiveStates", citiesController.getTopFiveStates);
exports.citiesRouter.get("/count/LastFiveStates", citiesController.getLastFiveStates);
exports.citiesRouter.get("/orderedDesc/cityNames", citiesController.getOrderedDescNames);
exports.citiesRouter.get("/orderedDesc/cityName", citiesController.getOrderedDescName);
exports.citiesRouter.get("/orderedAsc/cityNames", citiesController.getOrderedAscNames);
exports.citiesRouter.get("/orderedAsc/cityName", citiesController.getOrderedAscName);
exports.default = exports.citiesRouter;
//# sourceMappingURL=cities.js.map