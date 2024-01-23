const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

router.get("/v1/posts/:id/analysis", async (req, res) => {
  //respond with the id
  const uid = req.params.id;
  res.send(uid);
});
module.exports = router;
