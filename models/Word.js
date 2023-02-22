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
  correctCounter: {
    devices: [
      {
        deviceId: { type: String },
        correctAnswered: { type: Number, default: 0 }
      }
    ]
  }
},
  { timestamps: true }
)

module.exports = mongoose.model('words', WordSchema)