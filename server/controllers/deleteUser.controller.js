const User = require("../models/user.model");
const Todo = require("../models/todo.model");

const deleteUser = async (req, res) => {
    try {
        const userId = req.body.userId;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const deleteUserTodos = await Todo.deleteMany({ userId: userId });
        if (deleteUserTodos.acknowledged) {
            const deleteUser = await User.deleteOne({ _id: userId });
            if (!deleteUser.acknowledged) {
                return res.status(404).json({ message: "User not found" });
            }
        }
        res.status(200).json({
            message: `User with ID ${userId} 7 all it's todos were deleted`,
        });
    } catch (error) {}
};

module.exports = deleteUser;
