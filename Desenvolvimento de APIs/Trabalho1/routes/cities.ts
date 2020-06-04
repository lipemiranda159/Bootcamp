import express, { NextFunction } from "express";
import CitiesController from "../controllers/citiesController";

export const citiesRouter = express.Router();

const citiesController = new CitiesController();

citiesRouter.get("/:uf", citiesController.getUfCitiesLength);

export default citiesRouter;
