import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import { app } from "./app.js";

console.log(process.env.MONGODB_URL);

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Error on express, ${error}`);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED!! ", err);
  });
