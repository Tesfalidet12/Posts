import express from "express";
const router = express.Router();
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../middleware/controllers/postcontroller.js";

//To get all posts
router.get("/", getPosts);

//To get a single post

router.get("/:id", getPost);
//post request

router.post("/", createPost);

//Put request

router.put("/:id", updatePost);

//Delete request

router.delete("/:id", deletePost);
export default router;
