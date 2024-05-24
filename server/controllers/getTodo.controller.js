const Todo = require("../models/todo.model");

const getTodo = async (req, res) => {
    try {
        // Extract todoId and userId from request params and body
        const todoId = req.params.id;
        const userId = req.body.userId;

        // Check if todoId and userId are provided
        if (!(todoId && userId)) {
            return res.status(400).json({ message: "All input is required" });
        }

        // Find the todo
        const retrivedTodo = await Todo.findOne({
            $and: [{ _id: todoId }, { userId: userId }],
        });

        // Check if todo was found
        if (!retrivedTodo) {
            return res.status(404).json({ message: "Todo not found!" });
        }

        // Send retrived todo in response
        res.status(200).json(retrivedTodo);
    } catch (error) {
        res.status(500).json({
            message: `Internal server error: ${error.message}`,
        });
    }
};

module.exports = getTodo;
