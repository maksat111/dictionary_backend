const mongoose = require('mongoose')


const WordSchema = new mongoose.Schema({
    turkmen:{
      type:String,
      required:true
    },
    english:{
     type:String,
     required:true,
     max:500
    },
    img:{
     type:String
    },
    enTrans:{
      type:String,
      required:true
    },
    tmTrans:{
      type:String,
      required:true
    },
    categoryId:{
      type:String,
    },
    enAudio:{
      type:String,
    },
    tmAudio:{
      type:String,
    },
},
{timestamps:true}
)

module.exports = mongoose.model('words',WordSchema)