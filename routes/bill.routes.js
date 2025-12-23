import express from "express";
import { getBills, createBill } from "../src/controllers/bill.controller.js";

const router = express.Router();

router.get("/", getBills);
router.post("/", createBill);


export default router;
