const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    device_id: {
        type: String,
    },
    questions: {
        type: Array,
    },
    correctAnswers: {
        type: Array,
    }
});

module.exports = mongoose.model('quiz', QuizSchema);