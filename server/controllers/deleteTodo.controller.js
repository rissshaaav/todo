const Todo = require("../models/todo.model");

const deleteTodo = async (req, res) => {
    try {
        // Extract userId and todoId from request body and params
        const userId = req.body.userId;
        const todoId = req.params.id;

        // Check if userId and todoId are provided
        if (!(userId && todoId)) {
            return res.status(400).json({ message: "Invalid request" });
        }

        // Find and delete the todo
        const todo = await Todo.findOneAndDelete({
            $and: [{ _id: todoId }, { userId: userId }],
        });

        // Check if todo was found
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Send success response
        res.status(200).json({
            message: `Todo with title ${todo.title} was deleted`,
        });
    } catch (error) {
        res.status(500).json({
            message: `Internal server error: ${error.message}`,
        });
    }
};

module.exports = deleteTodo;