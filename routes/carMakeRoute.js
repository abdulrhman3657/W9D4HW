import express from "express";
import { createCarMake, deleteCarMake, getCarMake, getCarMakes, updateCarMake } from "../controllers/carmake.controller.js"

const router = express.Router();

router.get("/", getCarMakes)
router.post("/", createCarMake)
router.get("/:id", getCarMake)
router.put("/:id", updateCarMake)
router.delete("/:id", deleteCarMake)

export default router;