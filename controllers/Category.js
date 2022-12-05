const Category =require('../models/Category');
const Word =require('../models/Word');


const createCategory = async(req,res) => {
    const newCategory = new Category(req.body);
    try {
       const savedCategory = await newCategory.save();
       res.status(200).json(savedCategory)
    } catch (err) {
       res.status(500).json(err)
    }
}
//get post

const getCategory = async(req,res)=>{
     try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
     } catch (err) {
       return res.status(500).json(err)
     }
 }

 const getAllCategory = async(req,res)=>{
   try {
      const categories = await Category.find()
      const catId = categories.map(item=>{
         return item._id 
      } )
       const countById = await Promise.all(catId.map(id=>{
           return ({sany:Word.countDocuments({categoryId:id}) })    
    }))
    
   //  let merged = []
   //  for (let i=0; i < catId.length; i++){
   //    merged.push({
   //       ...catId[i],
   //       ...countById[i]
   //    })
   //  }

    
   //  console.log(countById)
   //   const data = await Promise.all(countById.map((id) =>{
   //     return Category.populate({count:id}, {new:true})
   //   }))

      res.status(200).json(countById)
   } catch (err) {
      return res.status(500).json(err)
   }
 }

 module.exports= {createCategory,getCategory,getAllCategory}


