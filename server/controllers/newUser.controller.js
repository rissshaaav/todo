const User = require("../models/user.model.js");

const newUser = async (req, res) => {
  try {
    // extract username and password from request body
    const { username, password } = req.body;

    // check if username and password are provided
    if (!(username && password)) {
      return res.status(400).json({ message: "all fields are mandatory" });
    }

    // create a new user and save to database
    const user = new User({ username, password });
    const savedUser = await user.save();

    // send the saved user as the response
    res.status(201).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};

module.exports = newUser;