import express from "express";
import createMathBot, {
  deleteSingleMathBot,
  getAllMathBotNames,
  singleChatBot,
} from "../controllers/mathBotController.js";

const router = express.Router();

router.get("/create/:name", createMathBot);
router.get("/name", getAllMathBotNames);
router.get("/delete/:_id", deleteSingleMathBot);
router.get("/single/:id?", singleChatBot);

export default router;
