import MathBot from "../models/mathBotModel.js";

const createMathBot = async (req, res) => {
  const { name } = req.params;

  try {
    const existingMathBot = await MathBot.findOne({ name });

    if (existingMathBot) {
      return res
        .status(400)
        .json({ error: "MathBot with this name already exists" });
    }

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
    const mathBots = await MathBot.find({}, { name: 1 });

    // Extract names from MathBot documents

    res.json({ mathBots });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch MathBot names", details: error.message });
  }
};
const deleteSingleMathBot = async (req, res) => {
  const { _id } = req.params;
  try {
    // Fetch all MathBot documents
    const mathBots = await MathBot.findByIdAndDelete({ _id });

    res.json({ status: "success", success: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to Deleting Single ChatBot",
      details: error.message,
    });
  }
};

const singleChatBot = async (req, res) => {
  const { id } = req.params;
  try {
    let mathBot;
    if (id) {
      // If chatbotId is provided, fetch the MathBot with that ID and populate the 'operations' field
      mathBot = await MathBot.findById(id).populate("operations");
    } else {
      // If chatbotId is not provided, fetch the most recently created MathBot
      mathBot = await MathBot.findOne().sort({ createdAt: -1 });
    }

    if (!mathBot) {
      return res.status(404).json({ error: "MathBot not found" });
    }

    res.json({ status: "success", mathBot });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch Single MathBot",
      details: error.message,
    });
  }
};

export { getAllMathBotNames, deleteSingleMathBot, singleChatBot };

export default createMathBot;
