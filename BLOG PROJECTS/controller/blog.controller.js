import BlogModel from "../model/blog.model.js";

export const BlogController = {
  CreateBlog: async (req, res) => {
    try {
      const newPost = new BlogModel(req.body);
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  GetBlog: async (req, res) => {
    try {
      const posts = await BlogModel.find()
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  GetById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  UpdateBlog: async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (!updatedPost)
        return res.status(404).json({ message: "Post not found" });
      res.json(updatedPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  DeleteBlog: async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost)
        return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
