const express = require('express');
const auth = require('../utils/auth.utils');
const newTodo = require('../controllers/newTodo.controller');
const allTodos = require('../controllers/allTodos.controller');
const deleteTodo = require('../controllers/deleteTodo.controller');

const todoRouter = express.Router();

todoRouter.post("/new", auth, newTodo);
todoRouter.get("/all", auth, allTodos);
todoRouter.delete("/delete/:id", auth, deleteTodo);

module.exports = todoRouter;