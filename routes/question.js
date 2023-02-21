const express = require('express');
const { createQuestion, getAllQuestion, getQuestion } = require('../controllers/Question')

const router = express.Router();

router.post('/', createQuestion)
router.get('/:id', getQuestion)
router.get('/', getAllQuestion)


module.exports = router;