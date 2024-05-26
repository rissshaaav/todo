const mongoose = require("mongoose");

// Define the todo schema
const todoSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending",
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

// Define the todo model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
