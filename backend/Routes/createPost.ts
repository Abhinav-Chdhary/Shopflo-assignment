import express, { Request, Response, Router } from "express";
import { MongoAPIError } from "mongodb";
import { Error } from "mongoose";
const Post = require("../Models/Post");

const router: Router = express.Router();

router.post("/v1/posts", async (req: Request, res: Response) => {
  try {
    const { uniqueid, textContent } = req.body;
    const newPost = await Post.create({
      uniqueid,
      textContent,
    });

    res.json({ success: true });
  } catch (err: unknown) {
    if(err instanceof MongoAPIError){
      if (err.code === 11000) {
          res.status(500).json({ success: false, message: `${err.message}` });
        } else {
          res.status(404).json({ success: false, message: `${err.message}` });
        }
    }
    else{
      console.log("Unkown Error occured");
    }
  }
});

export default router;
