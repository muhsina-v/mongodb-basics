import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from './src/routes/userRoutes.js'
import cookieParser from "cookie-parser";
const app = express();

configDotenv();

app.use(express.json());
app.use(cookieParser())

app.get("/home/:id", (req, res) => {
  res.send(req.params.id);
});

app.use('/user',userRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

app.listen(4000, () => {
  console.log("working");
});
