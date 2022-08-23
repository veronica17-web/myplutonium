const mongoose = require('mongoose');

const PublishersSchema = new mongoose.Schema( {
  
   name:String,
   headQuarter:String
    /*
    name: “Penguin”,
headQuarter: “New Delhi”,

    */
}, { timestamps: true });

module.exports = mongoose.model('NewPushisher', PublishersSchema)
