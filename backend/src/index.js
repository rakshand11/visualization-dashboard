import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { dataRouter } from "./route/data.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const connectToDB = async () => {
  try {
    const mongo_uri = process.env.MONGO_URI;

    await mongoose.connect(mongo_uri);

    console.log("Server connected to database");
  } catch (error) {
    console.log("Database connection failed:", error);
  }
};

connectToDB();

app.use(
  cors({
    origin: "https://visualization-dashboard-six.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/data", dataRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
