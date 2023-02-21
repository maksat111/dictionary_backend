const User = require('../models/User')

const createUser = async (req, res) => {

   try {
      const newUser = new User(req.body);

      const savedUser = await newUser.save();
      res.status(200).json(savedUser)
   } catch (error) {
      res.status(500).json("User already exist")
   }

}
module.exports = { createUser }


