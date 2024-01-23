const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

router.get("/v1/posts/", async (req, res) => {
  res.send("Hello Post");
});
module.exports = router;
