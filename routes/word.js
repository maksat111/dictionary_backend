const express = require('express');
const { getAllWord, createWord, updateWord, deleteWord, getWord, getByCategory, searchWord, getLearnedWords } = require('../controllers/Word');


const router = express.Router();

router.get('/learnedWords', getLearnedWords);
router.post('/', createWord)
router.put('/:id', updateWord)
router.delete('/:id', deleteWord)
router.get('/:id', getWord)
router.get('/', getAllWord)
router.get('/category/:id', getByCategory)
router.get('/search/word', searchWord)

module.exports = router;