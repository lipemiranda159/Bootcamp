import express from "express";
import { promises } from "fs";

const readFile = promises.readFile;
const router = express.Router();

var handlerException = function (err, req, res, next) {
  console.log("passou no middleware");
  try {
    next();
  } catch {
    console.log("exceção capturada");
  }
};

router.use((err, req, res, next) => {
  handlerException(err, req, res, next);
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
