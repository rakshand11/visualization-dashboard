import mongoose from "mongoose";
import dotenv from "dotenv";
import { dataModel } from "../model/data.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await dataModel.deleteMany({});
    console.log("Cleared existing data");

    const jsonData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../jsondata.json"), "utf-8"),
    );

    await dataModel.insertMany(jsonData);
    console.log(`Inserted ${jsonData.length} records!`);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

seedData();
