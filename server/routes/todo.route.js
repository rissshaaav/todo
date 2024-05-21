const express = require('express');
const auth = require('../utils/auth.utils');
const newTodo = require('../controllers/newTodo.controller');

const todoRouter = express.Router();

todoRouter.post("/new", auth, newTodo);

module.exports = todoRouter;