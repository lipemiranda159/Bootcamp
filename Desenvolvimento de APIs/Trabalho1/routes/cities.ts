import express, { NextFunction } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const processedPath = "./files/processed";
const encoding = "utf8";

export const citiesRouter = express.Router();

citiesRouter.get("/:uf", async (req, res) => {
  let { uf } = req.params;
  let city = await readFile(`${processedPath}/${uf}.json`, encoding);
  res.status(200).send({ length: city.length });
});

export default citiesRouter;
