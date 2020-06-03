import express from "express";
import { transfromFileRouter } from "./routes/transformFiles";
import { citiesRouter } from "./routes/cities";

var app = express();
const expressSwagger = require("express-swagger-generator")(app);
let options = {
  swaggerDefinition: {
    info: {
      description: "Api develop for the first challenge of Bootcamp",
      title: "NodeJs API - Challenge 1 Bootcamp",
      version: "1.0.0",
    },
    host: "localhost:3000",
    produces: ["application/json"],
    schemes: ["http", "https"],
  },
  basedir: __dirname, //app absolute path
  files: ["./routes/**/*.js"], //Path to the API handle folder
};
expressSwagger(options);

app.use(express.json());
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/transformFile", transfromFileRouter);
app.use("/cities", citiesRouter);

app.listen(3000, function () {
  console.log("started api!");
});
