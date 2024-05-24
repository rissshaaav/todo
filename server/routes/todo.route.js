const express = require('express');
const auth = require('../utils/auth.utils');
const newTodo = require('../controllers/newTodo.controller');
const allTodos = require('../controllers/allTodos.controller');
const deleteTodo = require('../controllers/deleteTodo.controller');
const getTodo = require('../controllers/getTodo.controller');
const updateTodoStatus = require('../controllers/updateTodoStatus.controller');

const todoRouter = express.Router();

// Create a new todo
todoRouter.post("/new", auth, newTodo);

// Get all todos
todoRouter.get("/all", auth, allTodos);

// Get a todo by id
todoRouter.get("/get/:id", auth, getTodo);

// Update the status of a todo by id
todoRouter.patch("/update/:id/status", auth, updateTodoStatus);

// Delete a todo by id
todoRouter.delete("/delete/:id", auth, deleteTodo);

module.exports = todoRouter;