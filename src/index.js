import dotenv from "dotenv";
import connectDB from "./db/connect.js";

console.log(process.env.MONGODB_URL)

dotenv.config({
  path: "./env",
});

connectDB();
