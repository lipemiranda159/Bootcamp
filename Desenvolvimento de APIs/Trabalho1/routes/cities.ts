import express, { NextFunction } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const processedPath = "./files/processed";
const encoding = "utf8";

export const citiesRouter = express.Router();
/**
 * @api [post] /cities
 * summary: Send notification
 * tags: [City]
 * parameters: [
 *  {
 *      name: "uf",
 *      type: "string",
 *      in: "path",
 *      required: true
 *  }
 * ]
 * responses:
 *  "200":
 *      description: "Notification created"
 *  "500":
 *      description: "Internal server error"
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
