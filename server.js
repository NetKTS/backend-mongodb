const express = require('express')
const app = express()
require('dotenv').config()
const mongooseConnection = require("./src/mongoose/mongoose.connect")
const TestRoute = require("./src/route/test.route")
const ParkingRoute = require("./src/route/parking.route")

//connect mongoose
mongooseConnection()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//route
app.use('/tests',TestRoute)
app.use('/parking',ParkingRoute)
// app.use("/",(req, res) => {
//     res.send("hello world")
//     })

app.listen(process.env.PORT, () => {
console.log("server is running on port", process.env.PORT)
});