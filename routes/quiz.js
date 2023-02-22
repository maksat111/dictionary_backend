const express = require('express');
const { createQuiz } = require('../controllers/QuizController')

const router = express.Router();

router.get('/test', createQuiz);


module.exports = router;