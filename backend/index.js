import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import router from "./router/index.js";
import connectDB from "./connection/connectDB.js";
config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
