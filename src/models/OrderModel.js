const mongoose = require('mongoose');
const moment = require('moment')
const ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema( {
   userId:{
        type:ObjectId,
        ref:'User1'
    },
    productId:{
        type:ObjectId,
        ref:'product'
    },
    amount: Number,
    isFreeAppUser: Boolean,
  date : String
  
 
    /* {
        _id: ObjectId("61951bfa4d9fe0d34da86344"),
        userId: “61951bfa4d9fe0d34da86829”,
        productId: “61951bfa4d9fe0d34da86344”
        amount: 0,
        isFreeAppUser: true, 
        date: “22/11/2021”
    }
 */   
}, { timestamps: true });


module.exports = mongoose.model('order', bookSchema) //users
