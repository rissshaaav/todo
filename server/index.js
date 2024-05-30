const dotenv = require("dotenv");
// Load environment variables
dotenv.config();
// >NOTE: env variables should be loaded before importing any other file
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route.js");
const todoRouter = require("./routes/todo.route.js");

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
app.listen(process.env.PORT, () => {
    console.log("Server is running on port: ", process.env.PORT);
    console.log("....connecting to database....");
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("Database connected");
    });
});
