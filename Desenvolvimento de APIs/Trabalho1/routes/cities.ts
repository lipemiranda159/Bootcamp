import express, { NextFunction } from "express";
import CitiesController from "../controllers/citiesController";

export const citiesRouter = express.Router();

const citiesController = new CitiesController();

citiesRouter.get("/:uf", citiesController.getUfCitiesLength);
citiesRouter.get("/count/topFiveStates", citiesController.getTopFiveStates);
citiesRouter.get("/count/LastFiveStates", citiesController.getLastFiveStates);
export default citiesRouter;
