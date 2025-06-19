import express from "express";
import { createCar, deleteCar, Get_all_cars_by_carMakeId, Get_all_cars_by_dealerId, getCar, getCars, updateCar } from "../controllers/car.controller.js";

const router = express.Router();

router.get("/", getCars)
router.get("/dealer/:dealerID", Get_all_cars_by_dealerId)
router.get("/carmake/:carMakeId", Get_all_cars_by_carMakeId)

router.post("/", createCar)
router.get("/:id", getCar)
router.put("/:id", updateCar)
router.delete("/:id", deleteCar)

export default router;