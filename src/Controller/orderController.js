const orderModel = require('../models/OrderModel')
const userModel = require('../models/userModel')
const productModel = require('../models/ProductModel')


const createOrder = async function(req,res){
    
let validateUser = req.body.userId
let validateProduct = req.body.productId


let checkUser = await userModel.findById(validateUser)
let checkProduct = await productModel.findById(validateProduct)
if(!checkUser){res.send({msg:"userID is invalid"})}
if(!checkProduct){res.send({msg:"product id is invalid"})}
let header = req.headers['isfreeappuser']
if(header =="true"){
  req.body.amount=0;
  req.body.isFreeAppUser=true
  let userdata = req.body
  let saveDate = await orderModel.create(userdata)
  res.send({msg:saveDate})
}
else if(header =="false"){
  let fetchbalance = await userModel.findById(validateUser).select({balance:1,_id:0})
  let fetechprice = await productModel.findById(validateProduct).select({price:1,_id:0})
  
  
  console.log("balance====>"+fetchbalance.balance)
  
  console.log("price====>"+fetechprice.price)
  if(fetechprice.price> fetchbalance.balance){
      res.send({msg:"balance is low"})
  }else{ 
      let newbalance = fetchbalance.balance-fetechprice.price 
      await userModel.findByIdAndUpdate({_id:validateUser},{$set:{balance:newbalance}})
      req.body.isFreeAppUser = false
      req.body.amount = fetechprice.price
      let userdata = req.body
      let saveDate = await orderModel.create(userdata)
      res.send({msg:saveDate})
  
  } 

}
}


module.exports.createOrder=createOrder 