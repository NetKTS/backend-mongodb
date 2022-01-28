const TestModel = require('../../model/test/test.schema')

exports.CreateTest = async (req) => {
    const doc = new TestModel(req.body)

    return doc.save()
}

exports.FindTest = async(req, res) =>{
    const doc = await TestModel.findOne({name: req.params.name})

    return doc
}