import mongoose from "mongoose";

const operationSchema = new mongoose.Schema({
  operation: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Operation = mongoose.model("Operation", operationSchema);

export default Operation;
