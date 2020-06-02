import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger.json";
import * as transfromFileRouter from "./routes/transformFiles";

var app = express();
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// app.use("/transformFile", transfromFileRouter);

app.listen(3000, function () {
  console.log("started api!");
});
