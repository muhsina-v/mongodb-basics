// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/user', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

import mongoose from "mongoose";

export default connectDB;
