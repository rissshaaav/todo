const express = require("express");
const fetchAllUsers = require("../controllers/allUsers.controller");
const newUser = require("../controllers/newUser.controller");
const login = require("../controllers/login.controller");

const userRouter = express.Router();

// create new user
userRouter.post("/new", newUser);

// get all users
userRouter.get("/all", fetchAllUsers);

// login
userRouter.post("/login", login);

module.exports = userRouter;
