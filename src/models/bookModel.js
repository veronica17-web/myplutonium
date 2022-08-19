const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema( {
    name: String, 
    author_id: Number, 
    
    price: Number,
       
    ratings:Number,
  AuthorDetails : {
    type :ObjectId,
    ref:'AuthorDetails'
}
    //   { 
    //     name:"Two states",
    //     author_id:1,
    //     price:50,
    //     ratings:4.5,
    // } ,

    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('BooksWithAuthor_id', bookSchema) //users
