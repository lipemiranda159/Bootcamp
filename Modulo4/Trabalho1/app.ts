import express from "express";
import { balanceRouter } from "./routes/balanceRouter";
import * as swagger_ui from "swagger-ui-express";
import * as swagger_document from "./swagger.json";

const app = express();
app.use(express.json());

// Starting swagger
app.use("/api/v1/docs", swagger_ui.serve, swagger_ui.setup(swagger_document));
app.use("/balance", balanceRouter);

const port = process.env.PORT || 3000;

app.listen(port);
