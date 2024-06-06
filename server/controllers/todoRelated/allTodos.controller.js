const Todo = require("../../models/todo.model");

const allTodos = async (req, res) => {
    try {
        // Extract userId from request body
        const userId = req.body.userId;

        // Check if userId is provided
        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }

        // !BUG: What if the user does not exist?

        // Fetch all todos from the database
        const todos = await Todo.find({ userId });

        // Send the todos as the response
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({
            message: `Internal server error: ${error.message}`,
        });
    }
};

module.exports = allTodos;
