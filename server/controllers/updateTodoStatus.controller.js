const Todo = require("../models/todo.model");

const updateTodoStatus = async (req, res) => {
    try {
        // Extract userId, todoId, and status from request body and params
        const userId = req.body.userId;
        const todoId = req.params.id;
        const status = req.body.status;

        // Check if userId, todoId, and status are provided
        if (
            !(
                userId &&
                todoId &&
                ["in-progress", "completed", "pending"].includes(status)
            )
        ) {
            return res
                .status(400)
                .json({ message: "All fields are mandatory" });
        }

        // Find the todo by id and update the status
        const updatedTodo = await Todo.findOneAndUpdate(
            { $and: [{ _id: todoId }, { userId }] },
            { $set: { status } },
            { new: true }
        );

        // If todo not found
        if (!updatedTodo) {
            res.status(404).json({ message: "Todo not found!" });
        }

        // Send the updated todo in response
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error.message}`,
        });
    }
};

module.exports = updateTodoStatus;