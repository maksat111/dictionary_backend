const mongoose = require('mongoose')


const QuestionSchema = new mongoose.Schema({
   question:String,
   alternatives:[
      {
         text:{
            type:String,
            required:true
         },
         isCorrect:{
            type:Boolean,
            required:true,
            default:false
         }
      }
   ]
    
},
{timestamps:true}
)

module.exports = mongoose.model('question',QuestionSchema)