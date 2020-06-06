import express from "express";
import GradeController from "../controllers/GradeController";

const gradeRouter = express.Router();
const gradeController = new GradeController();

gradeRouter.post("/new", gradeController.createNewGrade);
gradeRouter.put("/update", gradeController.updateGrade);
gradeRouter.delete("/delete", gradeController.deleteGrade);
gradeRouter.get("/TotalGrade", gradeController.getTotalGrade);
gradeRouter.get("/AvgGrade", gradeController.getAvgGrade);
gradeRouter.get("/TopThreeGrades", gradeController.getTopThreeGrades);

export default gradeRouter;
