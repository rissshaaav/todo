const express = require('express');
const auth = require('../utils/auth.utils');
const newTodo = require('../controllers/newTodo.controller');
const allTodos = require('../controllers/allTodos.controller');

const todoRouter = express.Router();

todoRouter.post("/new", auth, newTodo);
todoRouter.get("/all", auth, allTodos);

module.exports = todoRouter;