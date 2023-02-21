const Category = require('../models/Category');
const Word = require('../models/Word');


const createCategory = async (req, res) => {
   const newCategory = new Category(req.body);
   try {
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory)
   } catch (err) {
      res.status(500).json(err)
   }
}
//get post

const getCategory = async (req, res) => {
   try {
      const category = await Category.findById(req.params.id)
      res.status(200).json(category)
   } catch (err) {
      return res.status(500).json(err)
   }
}

const getAllCategory = async (req, res) => {
   try {
      const categories = await Category.find();
      let data = [];
      for (let i = 0; i < categories.length; i++) {
         const count = await Word.countDocuments({
            categoryId: categories[i]._id
         }).lean();
         data.push({
            count,
            category: categories[i]
         })
      }


      res.status(200).json(data)
   } catch (err) {
      return res.status(500).json(err)
   }
}

module.exports = { createCategory, getCategory, getAllCategory }
