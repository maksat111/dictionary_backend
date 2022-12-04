const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    deviceId:{
      type:String,
      required:true,
      unique:true
    },
    
},
{timestamps:true}
)

module.exports = mongoose.model('user',UserSchema)