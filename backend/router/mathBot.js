import express from "express";
import createMathBot, {
  getAllMathBots,
} from "../controllers/mathBotController.js";

const router = express.Router();

router.post("/create", createMathBot);
router.post("/name", getAllMathBotNames);

export default router;
