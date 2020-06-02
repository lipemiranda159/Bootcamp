import express, { NextFunction } from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const router = express.Router();

router.use(function(err: Error, req: express.Request, res: express.Response, next: NextFunction) {
  console.error(err.message);
    res.status(500).send(err.message); // If shouldRedirect is not defined in our error, sends our original err data
});


router.get("/", (req, res, next) => {
  try {
    throw new Error("teste");

    res.send("OK");
  } catch (err) {
    next(err);
  }
});

router.get("/:code", (req, res) => {});

export default router;
