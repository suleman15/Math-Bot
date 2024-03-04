import MathBot from "../models/mathBotModel.js";

const createMathBot = async (req, res) => {
  const { name } = req.body;

  try {
    // Check if a MathBot with the provided name already exists
    const existingMathBot = await MathBot.findOne({ name });

    if (existingMathBot) {
      return res
        .status(400)
        .json({ error: "MathBot with this name already exists" });
    }

    // Create a new MathBot document
    const mathBot = new MathBot({ name });
    await mathBot.save();

    res.json({ message: "MathBot created successfully", mathBot });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create MathBot", details: error.message });
  }
};

const getAllMathBotNames = async (req, res) => {
  try {
    // Fetch all MathBot documents
    const mathBots = await MathBot.find();

    // Extract names from MathBot documents
    const names = mathBots.map((mathBot) => mathBot.name);

    res.json({ names });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch MathBot names", details: error.message });
  }
};

export { getAllMathBotNames };

export default createMathBot;
