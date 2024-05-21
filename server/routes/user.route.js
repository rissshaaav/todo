const express = require("express");
const fetchAllUsers = require("../controllers/allUsers.controller");
const newUser = require("../controllers/newUser.controller");
const login = require("../controllers/login.controller");

const userRouter = express.Router();

// get all users
userRouter.get("/users", fetchAllUsers);

// create new user
userRouter.post("/new", newUser);

// login
userRouter.post("/login", login);

module.exports = userRouter;
