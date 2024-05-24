const User = require("../models/user.model.js");
const { generateJWT } = require("../utils/jwt.utils.js");
const { compareHash } = require("../utils/hash.utils.js");
const randomSpell = require("../utils/randomSpell.utils.js");

const login = async (req, res) => {
  try {
    // extract username and password from request body
    const { username, password } = req.body;

    // check if username and password are provided
    if (!(username && password)) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    // check if user exists
    const user = await User.findOne({ username });

    // if user exists
    if (user) {
      // check if password is correct
      const isPasswordCorrect = await compareHash(password, user.password);

      // if password is correct
      if (isPasswordCorrect) {
        // generate JWT token and send in response
        const token = generateJWT({ _id: user._id }, "2h");
        res.status(200).json({ token });
      }
      // if password is incorrect
      else {
        // Get a random harry potter spell
        const { name, description } = randomSpell();

        // send a random harry potter spell in response
        res
          .status(401)
          .json({ message: "incorrect password", spellName: name, spellDescription: description });
      }
    }
    // if user does not exist
    else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};

module.exports = login;
