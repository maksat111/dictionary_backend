const express = require('express');
const { getAllWord,createWord,updateWord,deleteWord,getWord,getByCategory} = require('../controllers/Word');


const router = express.Router();

router.post('/',createWord)
router.put('/:id',updateWord)
router.delete('/:id',deleteWord)
router.get('/:id',getWord)
router.get('/',getAllWord)
router.get('/category/:id',getByCategory)

module.exports = router;