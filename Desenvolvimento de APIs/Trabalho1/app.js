import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.js";
import transfromFileRouter from "./routes/transformFiles.js";

var app = express();
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/transformFile", transfromFileRouter);

app.listen(3000, function () {
  console.log("started api!");
});
