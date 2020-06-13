import express from "express";
import { transfromFileRouter } from "./routes/transformFiles";
import { citiesRouter } from "./routes/cities";
import {swagger-inline} from "swagger-inline";

var app = express();

app.use(express.json());
await swagger_inline(['./src/controllers/*.js'], {
  base: './docs/swagger-base.json',
  out: './docs/swagger.json'
});

// Starting swagger
const swagger_document = require('./docs/swagger.json');
app.use(
  '/api/v1/docs',
  swagger_ui.serve,
  swagger_ui.setup(swagger_document)
);

app.use("/transformFile", transfromFileRouter);
app.use("/cities", citiesRouter);

app.listen(3000, function () {
  console.log("started api!");
});
