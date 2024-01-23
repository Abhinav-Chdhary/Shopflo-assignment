const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

function countWordsAndAverageLength(str) {
  const words = str.match(/\b\w+\b/g) || [];
  const wordCount = words.length;
  const charCount = words.reduce((acc, word) => acc + word.length, 0);

  const averageWordLength = wordCount === 0 ? 0 : charCount / wordCount;

  return { wordCount, averageWordLength };
}

router.get("/v1/posts/:id/analysis", async (req, res) => {
  try {
    const uid = req.params.id;
    const post = await Post.findOne({ uniqueid: uid });

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    const { wordCount, averageWordLength } = countWordsAndAverageLength(
      post.textContent
    );
    res.json({ wordCount: wordCount, averageWordLength: averageWordLength });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
