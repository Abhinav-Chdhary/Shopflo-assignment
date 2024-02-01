const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  uniqueid: {
    type: Number,
    required: true,
    unique: true,
  },
  textContent: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", PostSchema);
