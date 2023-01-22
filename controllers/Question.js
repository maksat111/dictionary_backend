const Word =require('../models/Word');
const Question = require('../models/Question')

const createQuestion = async(req,res) => {
    const newQuestion = new Question(req.body);
    try {
       const savedQuestion = await newQuestion.save();
       res.status(200).json(savedQuestion)
    } catch (err) {
       res.status(500).json(err)
    }
}
//get post

const getQuestion = async(req,res)=>{
   try {
      const question = await Question.findById(req.params.id)
      res.status(200).json(question)
   } catch (err) {
     return res.status(500).json(err)
   }
}

const getAllQuestion = async(req,res)=>{
 try {
    const questions = await Question.find()
    res.status(200).json(questions)
 } catch (err) {
    return res.status(500).json(err)
 }
}

module.exports = {createQuestion,getAllQuestion,getQuestion}