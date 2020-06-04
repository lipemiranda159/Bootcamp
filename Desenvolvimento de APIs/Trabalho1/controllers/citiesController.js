"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readFile = fs_1.promises.readFile;
const processedPath = "./files/processed";
const encoding = "utf8";
class CitiesController {
    async getUfCitiesLength(request, response) {
        let { uf } = request.params;
        let city = await readFile(`${processedPath}/${uf}.json`, encoding);
        response.status(200).send({ length: city.length });
    }
}
exports.default = CitiesController;
//# sourceMappingURL=citiesController.js.map