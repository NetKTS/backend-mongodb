const ParkingModel = require('../../src/model/parking.schema')

exports.AddParking = async (req) => {
    const doc = new ParkingModel(req.body)

    return doc.save()
}

exports.GetParking = async(req, res) =>{
    const doc = await ParkingModel.findOne({id: req.params.id})

    
    return doc
}

exports.GetAllParking = async(req, res) =>{
    const doc = await ParkingModel.find()

    return doc
}

exports.SearchParking = async(req, res) =>{
    const result = await ParkingModel.find()
    const finalresult =[];
    result.forEach(r => {
        var lowername = req.params.name.toLowerCase()
        if(r.name.toLowerCase().includes(lowername)){
            finalresult.push(r)
        }
    })
    return finalresult
}