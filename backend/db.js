const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.hyxgh5j.mongodb.net/test?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDB;
