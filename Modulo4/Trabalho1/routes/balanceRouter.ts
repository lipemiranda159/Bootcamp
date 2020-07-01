import express from "express";
import balanceController from "../controllers/balanceController";

export const balanceRouter = express.Router();
const balancesController = new balanceController();

balanceRouter.get("/", balancesController.getBalances);
