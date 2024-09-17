const User = require('../models/userModel');

exports.signUp = async (req, res) => {
  try {
    const { email } = req.body;

    const isExistingUser = await User.findOne({ email });
    console.log(isExistingUser);

    //check if user already exists
    if (isExistingUser) {
      res.status(404).send('user already exists');
    }
    const user = await User.create(req.body);
    if (user) {
      res.status(201).json({
        message: 'User registered successfully',
        data: user,
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
