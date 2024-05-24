const Todo = require("../models/todo.model");

const updateTodo = async (req, res) => {
    try {
        // Extract the todoId, userId & Todo info from the request
        const todoId = req.params.id;
        const userId = req.body.userId;
        const { title, description, status, dueDate } = req.body;

        // Check if the userId and todoId are provided
        if (!(userId && todoId)) {
            return res
                .status(400)
                .json({ message: "UserId and TodoId are mandatory" });
        }

        // If status is provided, check if it is valid
        if (
            status &&
            !["in-progress", "pending", "completed"].includes(status)
        ) {
            return res.status(400).json({ message: "Invalid status" });
        }

        // Find the todo by id and update it
        const retrievedTodo = await Todo.findOneAndUpdate(
            { $and: [{ _id: todoId }, { userId }] },
            { $set: { title, description, status, dueDate } },
            { new: true }
        );

        // If the todo is not found, return a 404 response
        if (!retrievedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Return the updated todo
        res.status(200).json(retrievedTodo);
    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error.message}`,
        });
    }
};

module.exports = updateTodo;
