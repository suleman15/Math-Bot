import MathBot from "../models/mathBotModel.js";
import Operation from "../models/operationModel.js";

const postOperation = async (req, res) => {
  const { id, operation } = req.body;
  console.log(req.body);

  if (!operation) {
    return res.status(400).json({ error: "Operation is required" });
  }
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const formattedOperation = operation.replace(/(\d)\(/g, "$1*(");
    let result = eval(formattedOperation); // Using eval for simplicity; consider using a safer alternative in production

    result = Number(result.toFixed(2));

    // Create a new operation document
    const newOperation = await Operation.create({ operation, result });

    // Find the MathBot document by ID and push the new operation's ID to its operations array
    const updatedMathBot = await MathBot.findByIdAndUpdate(
      id,
      { timestamp: new Date(), $push: { operations: newOperation._id } },
      { new: true }
    );

    res.json({ newOperation, updatedMathBot });
  } catch (error) {
    res.status(400).json({ status: "Invalid operation", error });
  }
};

export default postOperation;
