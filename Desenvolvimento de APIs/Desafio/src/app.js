"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gradeRoutes_1 = __importDefault(require("./routes/gradeRoutes"));
const app = express_1.default();
app.use(express_1.default.json());
const port = 3000;
app.use(gradeRoutes_1.default);
app.listen(port);
//# sourceMappingURL=app.js.map