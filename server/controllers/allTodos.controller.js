const Todo = require("../models/todo.model");

const allTodos = async(req, res)=>{
    try {
        // Extract userId from request body
        const userId = req.body.userId;

        // Check if userId is provided
        if(!userId){
            return res.status(400).json({message: "userId is required"});
        }

        // Fetch all todos from the database
        const todos = await Todo.find({userId});

        // Send the todos as the response
        res.status(200).json(todos);        
    } catch (error) {
        
    }
}

module.exports = allTodos;