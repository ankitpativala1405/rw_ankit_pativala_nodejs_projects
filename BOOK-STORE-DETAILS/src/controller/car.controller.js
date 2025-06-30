import { Car } from "../models/car.models.js";

// car create with controller
// post
// create car
export const creatCar = async (req, res) => {
    try {
        const Car = await Book.create(req.body);
        res.status(201).json({
            success: true,
            date: Car
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}
// getcar
// GET
export const getcar = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json({
            success: true,
            data: cars
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "server is Error"
        })
    }
}
// update car
// put
export const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!car) {
            return res.status(404).json({
                success: false,
                error: "Car Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: car
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}
// Delete Car
// Delete
export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({
                success: false,
                error: 'Car Not Found'
            })
        }
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}