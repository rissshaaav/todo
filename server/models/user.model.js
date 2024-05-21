const mongoose = require("mongoose");
const { generateHash } = require("../utils/hash.utils");

// define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// generate hash before saving user
userSchema.pre("save", generateHash);

// define user model
const User = mongoose.model("User", userSchema);


module.exports = User;