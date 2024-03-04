import express from "express";
import operationRouter from "./calculate.js";
import MathBotRoute from "./mathBot.js";
const router = express.Router();

router.use("/operation", operationRouter);
router.use("/mathbot", MathBotRoute); 

export default router;
