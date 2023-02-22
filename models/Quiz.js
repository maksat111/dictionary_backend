const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true,
        unique: true
    },
    questions: {
        type: Array,
    },
    questionSelected: {
        type: Array,
    }
});

module.exports = mongoose.model('quiz', QuizSchema);