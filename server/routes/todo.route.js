const express = require("express");
const auth = require("../middlewares/auth.middleware");
const newTodo = require("../controllers/todoRelated/newTodo.controller");
const allTodos = require("../controllers/todoRelated/allTodos.controller");
const deleteTodo = require("../controllers/todoRelated/deleteTodo.controller");
const getTodo = require("../controllers/todoRelated/getTodo.controller");
const updateTodoStatus = require("../controllers/todoRelated/updateTodoStatus.controller");
const updateTodo = require("../controllers/todoRelated/updateTodo.controller");
const searchAndFilterTodos = require("../controllers/todoRelated/searchAndFilterTodos.controller");

const todoRouter = express.Router();

// Create a new todo
todoRouter.post("/new", auth, newTodo);

// Get all todos
todoRouter.get("/all", auth, allTodos);

// Get a todo by id
todoRouter.get("/get/:id", auth, getTodo);

// Update a todo by id
// >NOTE: Although this is a PUT request, it can handle partial updates as well
//> but that is not recommended. Better stick to HTTP Semantics.
todoRouter.put("/update/:id", auth, updateTodo);

// Update the status of a todo by id
todoRouter.patch("/update/:id/status", auth, updateTodoStatus);

// Search and filter todos
todoRouter.get("/search", auth, searchAndFilterTodos);

// Delete a todo by id
todoRouter.delete("/delete/:id", auth, deleteTodo);

module.exports = todoRouter;
