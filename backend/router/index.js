import express from "express";
import operationRouter from "./calculate.js";
import MathBotRoute from "./mathBot.js";
const router = express.Router();

router.use("/operation", operationRouter); //working fine
router.use("/mathbot", MathBotRoute); //working fine

export default router;
