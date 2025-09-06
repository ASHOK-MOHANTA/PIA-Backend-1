const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // options not needed
    console.log(" DB Connected!");
  } catch (error) {
    console.error("Failed to Connect DB:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
