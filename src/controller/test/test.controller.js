const TestService = require('../../service/test/test.service')
exports.CreatTest = async (req, res) => {
    const test = await TestService.CreateTest(req)

    return res.status(200).json({ data: test })
}

exports.FindTest = async (req, res) =>{
    const test = await TestService.FindTest(req)

    return res.status(200).json({ data: test})
}