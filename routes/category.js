const express = require('express');
const { createCategory, getCategory, getAllCategory } = require('../controllers/Category');


const router = express.Router();

router.post('/', createCategory)
router.get('/:id', getCategory)
router.get('/', getAllCategory)

module.exports = router;