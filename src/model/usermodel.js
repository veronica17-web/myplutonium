const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName : String,
    lastNam : String,
    number :{type :String,
               unique: true,
            required : true
        },
        age : Number,
        gender : {type : String,
            enum :["male","female","other"]
        
        }


},{timestamps:true})
module.exports =mongoose.model("user",userSchema)