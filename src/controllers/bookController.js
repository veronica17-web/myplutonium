//const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const authorModel = require('../models/authorModel')
const publisherModel = require('../models/publisherModel')

const createBook= async function (req, res) {
    let book = req.body
    let author_id = book.author
    let publisher_id = book.publisher
    if(!author_id){return res.send({msg:"required author name"})}
    if(!publisher_id){return res.send({msg : "required publisher id"})}
        let checkauthor = await authorModel.findById(author_id)
   if(!checkauthor){return res.send({msg:"author id is invalid"})}
   let checkpublisher = await publisherModel.findById(publisher_id)
   if(!checkpublisher){return res.send({msg:"publisher id is invalid"})}
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})
    }

     const fetchbook = async function(req,res){
        let details = await bookModel.find().populate("author").populate("publisher")
        res.send({msg : details})
     }


    
  let updatebooks = async function( req, res){
    let data = await bookModel.updateMany( {publisher:{$in:["6300f20d128dd7c0b1b57545","6300f25c128dd7c0b1b5754d"]}},{ isHardCover : true} ,
    {new:true }).find({ isHardCover : true}).populate("author").populate("publisher")//.count()

   // let updateData = await bookModel.
  res.send( { msg : data})
}

const increase = async function( req, res) {
  let add = await bookModel.updateMany({"ratings" :{$gt : 3.5}}, {$inc :{ "price" : +10 }}).find()
 // let newprice = await bookModel.find()
  res.send( {msg : add})
}

// //1st go to author collection
// get the ids  
// check the author id is = to req.body.author
//if notequal send resonds(error) 

// const getBooksData= async function (req, res) {  
//     let books = await bookModel.find() 
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.fetchbook = fetchbook
module.exports.updatebooks=updatebooks
module.exports.increase=increase
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 