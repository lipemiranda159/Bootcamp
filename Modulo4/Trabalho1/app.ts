import express from "express";
import { balanceRouter } from "./routes/balanceRouter";

const app = express();
app.use(express.json());

app.use("/balance", balanceRouter);

const port = process.env.PORT || 3000;

app.listen(port);
