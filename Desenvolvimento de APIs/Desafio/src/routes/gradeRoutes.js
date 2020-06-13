"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GradeController_1 = __importDefault(require("../controllers/GradeController"));
const gradeRouter = express_1.default.Router();
const gradeController = new GradeController_1.default();
gradeRouter.get("/grade/:id", gradeController.show);
gradeRouter.post("/new", gradeController.createNewGrade);
gradeRouter.put("/update", gradeController.updateGrade);
gradeRouter.delete("/delete", gradeController.deleteGrade);
gradeRouter.post("/TotalGrade", gradeController.getTotalGrade);
gradeRouter.post("/AvgGrade", gradeController.getAvgGrade);
gradeRouter.post("/TopThreeGrades", gradeController.getTopThreeGrades);
exports.default = gradeRouter;
//# sourceMappingURL=gradeRoutes.js.map