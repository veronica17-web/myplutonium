const publishermodel = require("../models/publisherModel")

const createPublisher = async function(req,res){
    let details = req.body
    let list = await publishermodel.create(details)
    res.send({msg:list})
}
module.exports.createPublisher = createPublisher