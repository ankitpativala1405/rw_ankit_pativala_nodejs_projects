import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Anonymous",
    },
  },
  { timestamps: true }
);

const BlogModel = mongoose.model("Post", postSchema);
export default BlogModel;
