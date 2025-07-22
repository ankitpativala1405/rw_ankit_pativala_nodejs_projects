import express from "express";
import dotenv from "dotenv";
import router from "./router/blog.router.js";
import { DbConnect } from "./config/DbConnect.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/posts", router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
    DbConnect()
});
