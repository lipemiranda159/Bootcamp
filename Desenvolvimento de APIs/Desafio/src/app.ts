import express from "express";
import gradeRouter from "./routes/gradeRoutes";

const app = express();
app.use(express.json());
const port = 3000;
app.use(gradeRouter);
app.listen(port);
