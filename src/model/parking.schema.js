const mongoose = require('mongoose')
const ParkingSchema = new mongoose.Schema({
    id: Number,
    name:String,
    description:String,
    distance:Number,
    available:Number,
    lat:Number,
    lng:Number,
    photo:String,
    shared_by:String,
    shared_photo:String,
    shared_phone:String,
    shared_date:String
    
}, 
{ 
    timestamps: true 
    })

module.exports = mongoose.model('parking', ParkingSchema)