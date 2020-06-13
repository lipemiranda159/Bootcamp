import express from "express";
import GradeController from "../controllers/GradeController";

const gradeRouter = express.Router();
const gradeController = new GradeController();
gradeRouter.get("/grade/:id", gradeController.show);
gradeRouter.post("/new", gradeController.createNewGrade);
gradeRouter.put("/update", gradeController.updateGrade);
gradeRouter.delete("/delete", gradeController.deleteGrade);
gradeRouter.post("/TotalGrade", gradeController.getTotalGrade);
gradeRouter.post("/AvgGrade", gradeController.getAvgGrade);
gradeRouter.post("/TopThreeGrades", gradeController.getTopThreeGrades);

export default gradeRouter;
