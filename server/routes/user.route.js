const express = require("express");
const auth = require("../middlewares/auth.middleware");
const fetchAllUsers = require("../controllers/allUsers.controller");
const newUser = require("../controllers/newUser.controller");
const login = require("../controllers/login.controller");
const updateUser = require("../controllers/updateUser.controller");

const userRouter = express.Router();

// create new user
userRouter.post("/new", newUser);

// get all users
userRouter.get("/all", fetchAllUsers);

// login
userRouter.post("/login", login);

// update user
userRouter.put("/update", auth, updateUser);

module.exports = userRouter;
