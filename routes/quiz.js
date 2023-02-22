const express = require('express');
const { createQuiz, getListOfQuizs, getQuestionsOfQuiz, resultCheck } = require('../controllers/QuizController')

const router = express.Router();

router.get('/createQuiz', createQuiz);
router.get('/quizList', getListOfQuizs);
router.get('/quizQuestions', getQuestionsOfQuiz);
router.get('/resultCheck', resultCheck);



module.exports = router;