const User = require('../models/userModel');

exports.signUp = async (req, res,next) => {
  try {
    const { email } = req.body;

    const isExistingUser = await User.findOne({ email });
  
    //check if user already exists
    if (isExistingUser) {
      throw new Error("User already exists")
    }
    const user = await User.create(req.body);
    if (user) {
     return res.status(201).json({
        message: 'User registered successfully',
        data: user,
      });
    }
  } catch (err) {
    console.log('errrr' , err)
   next(err)
  }
};
