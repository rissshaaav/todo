const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route.js");
const todoRouter = require("./routes/todo.route.js");

// Load environment variables
dotenv.config();
// Create an express app
const app = express();

// Parse incoming JSON data
app.use(express.json());

// Define a route handler for the default home page
app.get("/", (res) => {
    res.send("Hello World");
});

// Routes
app.use("/user", userRouter);
app.use("/todo", todoRouter);

// Server & Database Connection
app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("....connecting to database....");
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("Database connected");
    });
});
