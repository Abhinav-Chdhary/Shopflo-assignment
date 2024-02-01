const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

router.post("/v1/posts", async (req, res) => {
  console.log(req.body.uniqueid);
  try {
    await Post.create({
      _id: req.body.uniqueid,
      textContent: req.body.textContent,
    });
    res.json({ success: true });
  } catch (err) {
    if (err.code === 11000) {
      res.status(500).json({ success: false, message: `${err.message}` });
    } else {
      res.status(err.code).json({ success: false, message: `${err.message}` });
    }
  }
});
module.exports = router;
