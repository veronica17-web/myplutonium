const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
  bookName : String,
  AuthorName :String,
  year :Number,
  category : String
}, { timestamps: true });

module.exports = mongoose.model('books', BookSchema) 



// String, Number
// Boolean, Object/json, array