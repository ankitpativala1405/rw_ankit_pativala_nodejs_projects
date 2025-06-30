import dotenv from 'dotenv'
// import app from './app.js'
import connectDB from './db/db.js'
import cors from 'cors'
import router from './router/car.router.js'
import express from 'express'

const app=express();

dotenv.config({
    path: "./.env"
});

connectDB();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.urlencoded({extends:true}));
app.use(express.json());

app.use("/cars", router)

// basic router
app.get("/",(req,res)=>{
    res.send("Car Api",router)
});

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server is started on port ${process.env.PORT}`) : null;
});