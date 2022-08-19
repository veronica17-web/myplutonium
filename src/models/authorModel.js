const mongoose = require('mongoose')

let authorSchema = new mongoose.Schema({
 author_id : Number,
 author_name:String,
 age:Number,
 address: String
},{timestamps :true})

module.exports = mongoose.model('AuthorDetails', authorSchema)






// { 
//     author_id:2,
//     author_name:"J.k Rowling",
//     age:60,
//     address:"Britain"
// } ,
