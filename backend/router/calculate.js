import express from "express";
import postOperation from "../controllers/operationController.js";
import MathBot from "../models/mathBotModel.js";
import createMathBot from "../controllers/mathBotController.js";

const router = express.Router();

router.post("/", postOperation);

export default router;
