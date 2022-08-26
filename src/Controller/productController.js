
const productModel= require("../models/ProductModel")

let createProduct =async  function(req,res){
    let data = req.body
    saveProduct = await productModel.create(data)
    res.send({msg:saveProduct})
}
module.exports.createProduct= createProduct