const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route.js");
const todoRouter = require("./routes/todo.route.js");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (res) => {
  res.send("Hello World");
});

app.use("/auth", userRouter);
app.use("/todo", todoRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("....connecting to database....")
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected");
  });
});
