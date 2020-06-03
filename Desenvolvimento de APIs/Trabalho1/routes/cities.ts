import express, { NextFunction } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const processedPath = "./files/processed";
const encoding = "utf8";

export const citiesRouter = express.Router();
/**
 * @route GET /cities/:uf
 * @group Cities - Generate api files
 * @param {string} uf.path.required
 * @returns {Number} 200 - Count of cities of UF
 * @returns {Error}  default - Unexpected error
 */
citiesRouter.get("/:uf", async (req, res) => {
  let { uf } = req.params;
  console.log(req.params.uf);
  let city = await readFile(
    `${processedPath}/${uf.toUpperCase()}.json`,
    encoding
  );
  console.log(city);
  res.send("Ok");
});

export default citiesRouter;
