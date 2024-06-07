const Todo = require("../../models/todo.model");

const newTodo = async (req, res) => {
    try {
        // Extract userId, title, description, status, and dueDate from request body
        const { userId, title, description, status, dueDate } = req.body;

        // Check if userId, title, description, status, and dueDate are provided
        if (!(title && description && dueDate)) {
            return res
                .status(400)
                .json({ message: "All fields are mandatory" });
        }

        // Create a new todo from request body
        const todo = new Todo({
            userId,
            title,
            description,
            status,
            dueDate: new Date(dueDate),
        });

        // Save the new todo to the database
        const savedTodo = await todo.save();

        // Send the saved todo as the response
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({
            message: `Internal server error: ${error.message}`,
        });
    }
};

module.exports = newTodo;
