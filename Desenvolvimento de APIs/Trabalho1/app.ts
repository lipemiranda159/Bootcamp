import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger.json";
import { transfromFileRouter } from "./routes/transformFiles";
import { citiesRouter } from "./routes/cities";

var app = express();
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/transformFile", transfromFileRouter);
app.use("/cities", citiesRouter);

app.listen(3000, function () {
  console.log("started api!");
});
