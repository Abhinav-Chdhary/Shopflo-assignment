const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  textContent: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", PostSchema);
