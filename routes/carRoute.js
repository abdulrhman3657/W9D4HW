import express from "express";
import { createDealer, deleteDealer, getDealer, getDealers, updateDealer } from "../controllers/car.controller.js";

const router = express.Router();

router.get("/", getDealers)
router.post("/", createDealer)
router.get("/:id", getDealer)
router.put("/:id", updateDealer)
router.delete("/:id", deleteDealer)

export default router;