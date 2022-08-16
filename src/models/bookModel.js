const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
bookName:{type : String,
    required:true },
authorName: String, 
  
year :{
    type:Number,
    default:2022
},
tags: [String],
    
    isPublished: Boolean,
prices: {
        indianPrice: String,
        europePrice: String,
    },
totalPages : Number,
stockAvailable : Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
