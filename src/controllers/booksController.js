const booksmodel= require("../models/bookModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const booksList = async function(req,res){
    let data = req.body
  let   savedata = await booksmodel.create(data)
    res.send({msg:savedata})
}


const getdata = async function(req,res){
    let books = await booksmodel.find()
    res.send({data:books})
}

module.exports.booksList =booksList
module.exports.books = getdata
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData