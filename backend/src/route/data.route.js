import { Router } from "express";
import { getAllData, getFilters } from "../controller/data.controller.js";

export const dataRouter = Router();

dataRouter.get("/", getAllData);
dataRouter.get("/filter", getFilters);
