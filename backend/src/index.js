import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { dataRouter } from "./route/data.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const connectToDB = async () => {
  try {
    const mongo_uri = process.env.MONGO_URI;
    await mongoose.connect(mongo_uri);
    console.log("server is connected to database");
  } catch (error) {
    console.log("server is not connected to database ", error);
  }
};

connectToDB();

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/data", dataRouter);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
