import express, { urlencoded } from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./router/blog.router.js";
import { DbConnect } from "./config/DbConnect.js";
import BlogModel from "./model/blog.model.js";

dotenv.config();

const app = express();


app.use(express.json());
app.use(urlencoded({ extended: true }));
app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(path.resolve(), "public")));
app.use("/api/posts", router);

app.get("/blogs", async (req, res) => {
    const blogs = await BlogModel.find();
    res.render("blogs/index", { blogs });
});

app.get("/blogs/form", (req, res) => {
    res.render('blogs/form')
})


app.post('/create-blogs', (req, res) => {
    const data = req.body

    const submittedData = [data];
    res.render('blogs/table', { submittedData })
})
// Start server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    DbConnect();
});

