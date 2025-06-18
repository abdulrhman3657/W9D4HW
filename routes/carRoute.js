import express from "express";
import { createDealer, deleteDealer, Get_all_cars_by_carMakeId, Get_all_cars_by_dealerId, getDealer, getDealers, updateDealer } from "../controllers/car.controller.js";

const router = express.Router();

router.get("/", getDealers)
router.get("/dealer/:dealerID", Get_all_cars_by_dealerId)
router.get("/carmake/:carMakeId", Get_all_cars_by_carMakeId)

router.post("/", createDealer)
router.get("/:id", getDealer)
router.put("/:id", updateDealer)
router.delete("/:id", deleteDealer)

export default router;