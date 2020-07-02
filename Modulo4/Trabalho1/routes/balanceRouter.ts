import express from "express";
import balanceController from "../controllers/balanceController";

export const balanceRouter = express.Router();
const balancesController = new balanceController();

balanceRouter.get("/", balancesController.getBalances);
balanceRouter.get("/average", balancesController.getAverageBalance);
balanceRouter.get("/:agency/:account", balancesController.getBalance);
balanceRouter.post("/deposit", balancesController.depositAccount);
balanceRouter.delete("/", balancesController.deleteAccount);
balanceRouter.post("/transfer", balancesController.transferBalance);
