import { Request, Response } from "express";
import FileService from "../services/FileService";
import ArrayOrderService from "../services/ArrayOrderService";

class GradeController {
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const grades = FileService.getFileData();
    const grade = grades.grades.filter(
      (grade) => grade.id === Number.parseInt(id)
    );
    if (grade.length > 0) {
      res.send(grade);
    } else {
      res.status(404).send({ err: "Grade not found" });
    }
  }

  async createNewGrade(req: Request, res: Response) {
    try {
      const { student, subject, type, value } = req.body;
      const grade = {
        student,
        subject,
        type,
        value,
        id: 0,
        timestamp: "",
      };
      const grades = FileService.getFileData();
      grade.id = grades.nextId;
      grade.timestamp = Date.now().toString();
      grades.grades.push(grade);
      grades.nextId++;
      FileService.writeFileData(JSON.stringify(grades));
      res.send({ status: "ok" });
    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  }
  async updateGrade(req: Request, res: Response) {
    const grades = FileService.getFileData();

    const { student, subject, type, value } = req.body;
    const { idGrade } = req.params;
    const gradeIndex = grades.grades.findIndex(
      (grade) => grade.id === Number.parseInt(idGrade)
    );
    const id = Number.parseInt(idGrade);

    if (gradeIndex) {
      grades.grades[gradeIndex] = {
        student,
        subject,
        type,
        value,
        id,
        timestamp: Date.now().toString(),
      };
      FileService.writeFileData(JSON.stringify(grades));
      res.send({ status: "ok" });
    } else {
      res.status(404).send({ err: "Grade not found" });
    }
  }
  async deleteGrade(req: Request, res: Response) {
    const { idGrade } = req.params;
    const id = Number.parseInt(idGrade);
    try {
      const grades = FileService.getFileData();
      grades.grades = grades.grades.filter((grade) => grade.id !== id);
      FileService.writeFileData(JSON.stringify(grades));
      res.send({ status: "ok" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getTotalGrade(req: Request, res: Response) {
    try {
      const grades = FileService.getFileData();
      const { student, subject } = req.body;
      const sum = grades.grades
        .filter(
          (grade) => grade.student === student && grade.subject === subject
        )
        .map((grade) => grade.value)
        .reduce((acc, cur) => acc + cur);
      res.send({ Total: sum });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getAvgGrade(req: Request, res: Response) {
    try {
      const grades = FileService.getFileData();
      const { subject, type } = req.body;
      const mappedGrade = grades.grades
        .filter((grade) => grade.subject === subject && grade.type === type)
        .map((grade) => grade.value);
      const length = mappedGrade.length;
      const total = mappedGrade.reduce((acc, cur) => acc + cur);
      res.send({ Total: total / length });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getTopThreeGrades(req: Request, res: Response) {
    try {
      const grades = FileService.getFileData();
      const { subject, type } = req.body;
      const mappedGrade = grades.grades
        .filter((grade) => grade.subject === subject && grade.type === type)
        .map((grade) => {
          return {
            value: grade.value,
            subject: grade.subject,
            type: grade.type,
          };
        });

      res.send(
        ArrayOrderService.orderByNumberDescending(mappedGrade).slice(0, 4)
      );
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

export default GradeController;
