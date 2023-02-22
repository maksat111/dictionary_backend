const express = require('express');
const { createQuiz, getListOfQuizs, getQuestionsOfQuiz, confirmResult } = require('../controllers/QuizController')

const router = express.Router();

router.get('/createQuiz', createQuiz);
router.get('/quizList', getListOfQuizs);
router.get('/quizQuestions', getQuestionsOfQuiz);
router.post('/resultCheck', confirmResult);

module.exports = router;