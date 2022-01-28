const ParkingService = require('../../src/service/parking.service')
exports.AddParking = async (req, res) => {
    const Parking = await ParkingService.AddParking(req)

    return res.status(200).json({ data: Parking })
}

exports.GetParking = async (req, res) =>{
    const Parking = await ParkingService.GetParking(req)

    return res.status(200).json({ data: Parking})
}
exports.GetAllParking = async (req, res) => {
    const Parking = await ParkingService.GetAllParking(req)

    return res.status(200).json({ data: Parking})
}

exports.SearchParking = async (req, res) => {
    const Parking = await ParkingService.SearchParking(req)

    return res.status(200).json({ data: Parking})
}