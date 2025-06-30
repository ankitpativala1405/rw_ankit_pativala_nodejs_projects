import express from 'express'
import { creatCar , getcar , updateCar , deleteCar } from '../controller/car.controller.js'

const router = express.Router()

router.route('/')
.post(creatCar)
.get(getcar)

router.route('/:id')
.put(updateCar)
.delete(deleteCar)

export default router