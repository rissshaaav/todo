const Todo = require("../../models/todo.model");

const searchAndFilterTodos = async (req, res) => {
    // Get the userId from the request body
    const userId = req.body.userId;

    // Check if the userId is provided
    if (!userId) {
        return res.status(400).json({
            message: "User ID is required",
        });
    }

    // Get the parameters from the query parameters
    const { title, status, dueDateFrom, dueDateTo } = req.query;

    // Create the query object
    const query = { userId };

    // Check if the parameters exist and if they do, add them to the query object
    if (title) {
        query.title = { $regex: title, $options: "i" };
    }
    if (status) {
        query.status = status;
    }
    if (dueDateFrom || dueDateTo) {
        query.dueDate = {};
        if (dueDateFrom) {
            query.dueDate.$gte = new Date(dueDateFrom);
        }
        if (dueDateTo) {
            query.dueDate.$lte = new Date(dueDateTo);
        }
    }

    // Retrieve the todos based on the query object
    try {
        const retrievedTodos = await Todo.find(query);
        res.status(200).json(retrievedTodos);
    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error.message}`,
        });
    }
};

module.exports = searchAndFilterTodos;
