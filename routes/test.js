const express = require('express');
const {quiz} = require('../controllers/Word')

const router = express.Router();

router.get('/test',quiz)


module.exports = router;