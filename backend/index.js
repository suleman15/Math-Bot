import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import router from "./router/index.js";
import connectDB from "./connection/connectDB.js";
import cors from "cors";
config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
