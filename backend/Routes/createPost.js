const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

router.post("/v1/posts", async (req, res) => {
  try {
    await Post.create({
      uniqueid: req.body.uniqueid,
      textContent: req.body.textContent,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, message: "An error occured" });
  }
});
module.exports = router;
