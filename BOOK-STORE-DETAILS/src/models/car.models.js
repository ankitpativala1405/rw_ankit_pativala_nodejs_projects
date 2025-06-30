import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    model:{
        type:String,
        require:[true  , "car model is required"],
        trim:true
    },
    brand:{
        type:String,
        require:[true  , "car brand is required"],
        trim:true
    },
    price:{
        type:Number,
        require:true,
        min:[0,'pric must be positive']
    },
    inElectric:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

export const Car = mongoose.model("Car",CarSchema)