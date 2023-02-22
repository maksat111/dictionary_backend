const mongoose = require('mongoose')


const WordSchema = new mongoose.Schema({
  turkmen: {
    type: String,
  },
  english: {
    type: String,
    max: 500
  },
  example: {
    type: String,
  },
  img: {
    type: String,
  },
  enTrans: {
    type: String,
  },
  tmTrans: {
    type: String,
  },
  categoryId: {
    type: String,
  },
  enAudio: {
    type: String,
  },
  tmAudio: {
    type: String,
  },
  correct_counter: [
    {
      device_id: { type: String },
      correctAnswered: { type: Number }
    }
  ]
},
  { timestamps: true }
)

module.exports = mongoose.model('words', WordSchema)