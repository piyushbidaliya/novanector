import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  content: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
