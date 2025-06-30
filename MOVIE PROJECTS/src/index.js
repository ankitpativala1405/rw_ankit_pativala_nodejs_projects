const express = require('express');
const DbConnect = require('./DB/DbConnect');
require("dotenv").config();
const app = express();
const cors = require("cors");
const { router } = require('./Router/movie.router');
app.use(cors());

const port = process.env.PORT || 8090;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/movie",router)


app.get("/",(req,res)=>{
    res.send("Welcome To Movie Projects")
});

app.listen(port, () => {
  console.log(`start listning onport->${port}....`);
  DbConnect()
});