import express from "express";
import { BlogController } from "../controller/blog.controller.js";

const router = express.Router();

router.get("/", BlogController.GetBlog);
router.post("/", BlogController.CreateBlog);


router.get("/:id", BlogController.GetById);
router.put("/:id", BlogController.UpdateBlog);
router.delete("/:id", BlogController.DeleteBlog);

export default router;
