const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
