import express from "express";
import CalculateController from "../controller/CalculateController";

const router = express.Router();

router.post("/calculate", CalculateController.calculate);

export default router;
