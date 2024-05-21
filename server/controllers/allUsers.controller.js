const User = require('../models/user.model.js');

const fetchAllUsers = async (req, res) => {
  try {
    // const users = await User.find();
    // res.json(users);
    res.send("all users");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = fetchAllUsers;