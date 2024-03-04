// mathBotSchema.js
import mongoose from "mongoose";

const mathBotSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  operations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Operation",
    },
  ],
});

const MathBot = mongoose.model("MathBot", mathBotSchema);

export default MathBot;
