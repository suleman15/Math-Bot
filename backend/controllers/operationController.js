import OperationModel from "../models/operationModel.js";

const postOperation = async (req, res) => {
  const { operation } = req.body;
  if (!operation) {
    return res.status(400).json({ error: "Operation is required" });
  }

  try {
    const formattedOperation = operation.replace(/(\d)\(/g, "$1*(");

    let result = eval(formattedOperation); // Using eval for simplicity; consider using a safer alternative in production

    result = Number(result.toFixed(2));

    const newOperation = new OperationModel({ operation, result });
    await newOperation.save();
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: "Invalid operation" });
  }
};

export default postOperation;
