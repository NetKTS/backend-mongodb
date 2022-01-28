const express = require('express')
const router = express.Router()
const ParkingController = require('../controller/parking.controller')

router.get('/', ParkingController.GetAllParking)
router.get('/search/:name',ParkingController.SearchParking)
router.get('/get/:id',ParkingController.GetParking)
router.post('/add',ParkingController.AddParking)

module.exports = router