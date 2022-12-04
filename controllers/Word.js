const Word =require('../models/Word');
const Category = require('../models/Category')


const createWord = async(req,res) => {
    const newWord = new Word(req.body);
    try {
       const savedWord = await newWord.save();
       res.status(200).json(savedWord)
    } catch (err) {
       res.status(500).json(err)
    }
}
//update Post 
const updateWord = async (req,res)=>{
     try {
          const word = await Word.findById(req.params.id) 
               await word.updateOne({$set:req.body});
               res.status(200).json('the word has been updated')
     } catch (err) {
          res.status(500).json(err)
     }
}

//delete Post
const deleteWord = async (req,res)=>{
     try {
          const word = await Word.findById(req.params.id) 
               await word.deleteOne();
               res.status(200).json('the word has been deleted')
     } catch (err) {
          res.status(500).json(err)
     }
}
//get post

const getWord = async(req,res)=>{
     try {
        const word = await Word.findById(req.params.id)
        res.status(200).json(word)
     } catch (err) {
       return res.status(500).json(err)
     }
 }

 const getAllWord = async(req,res)=>{
   try {
      const words = await Word.find()
      res.status(200).json(words)
   } catch (err) {
      return res.status(500).json(err)
   }
 }
 const getByCategory = async(req,res)=>{
      try {
          const wordCount = await Word.countDocuments({categoryId:req.params.id})
          const categoryWords = await Word.find({categoryId:req.params.id})
          res.status(200).json({categoryWords,wordCount})
     } catch (err) {
          return res.status(500).json(err)
     }
 }


 module.exports= {getAllWord,createWord,updateWord,deleteWord,getWord,getByCategory}


