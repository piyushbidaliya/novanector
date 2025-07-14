import express from "express";
import { uploadBlogImage } from "../config/multer.js";
import {
  deleteBlog,
  getAllBlog,
  getBlogById,
  getComment,
  postBlog,
  postComment,
} from "../controllers/blogController.js";
const router = express.Router();

router.get("/get", getAllBlog);
router.post("/", uploadBlogImage, postBlog);
router.delete("/:postId", deleteBlog);
router.get("/:userId", getBlogById);

router.post("/", postComment);
router.get("/:postId", getComment);

export default router;
