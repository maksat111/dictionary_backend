const Word = require('../models/Word');

const createWord = async (req, res) => {
     const newWord = new Word(req.body);
     try {
          const savedWord = await newWord.save();
          res.status(200).json(savedWord)
     } catch (err) {
          res.status(500).json(err)
     }
}

//update Post 
const updateWord = async (req, res) => {
     try {
          const word = await Word.findById(req.params.id)
          await word.updateOne({ $set: req.body });
          res.status(200).json('the word has been updated')
     } catch (err) {
          res.status(500).json(err)
     }
}

//delete Post
const deleteWord = async (req, res) => {
     try {
          const word = await Word.findById(req.params.id)
          await word.deleteOne();
          res.status(200).json('the word has been deleted')
     } catch (err) {
          res.status(500).json(err)
     }
}
//get post

const getWord = async (req, res) => {
     try {
          const word = await Word.findById(req.params.id)
          res.status(200).json(word)
     } catch (err) {
          return res.status(500).json(err)
     }
}

const getAllWord = async (req, res) => {
     try {
          const words = await Word.find()
          res.status(200).json(words)
     } catch (err) {
          return res.status(500).json(err)
     }
}

const getByCategory = async (req, res) => {
     try {
          const categoryWords = await Word.find({ categoryId: req.params.id })
          res.status(200).json({ categoryWords })
     } catch (err) {
          return res.status(500).json(err)
     }
}

const searchWord = async (req, res, next) => {
     const query = req.query.q
     try {
          const words = await Word.find({ english: { $regex: query, $options: 'i' } }).limit(40)
          res.status(200).json(words)
     } catch (err) {
          next(err)
     }
}

const getLearnedWords = async (req, res) => {
     try {
          const deviceId = req.query.deviceId;

          let foundWords = await Word.find({ "correct_counter.device_id": deviceId, "correct_counter.correctAnswered": { $gt: 2 } });

          foundWords.forEach(element => {
               element.correct_counter = undefined
          });

          res.status(200).json(foundWords)
     } catch (err) {
          res.status(500).json(err);
     }
}


module.exports = { getAllWord, createWord, updateWord, deleteWord, getWord, getByCategory, searchWord, getLearnedWords }