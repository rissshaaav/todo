const User = require("../models/user.model");
const Todo = require("../models/todo.model");
const { deleteProfilePicture } = require("../utils/cloudinary.utils");

const deleteUser = async (req, res) => {
    try {
        // extract user ID from request body
        const userId = req.body.userId;

        // check if user ID is provided
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // delete all todos of the user
        const deleteUserTodos = await Todo.deleteMany({ userId: userId });

        // if all todos of the user are deleted, delete the user's profile picture
        if (deleteUserTodos.acknowledged) {

            // delete user profile picture from cloudinary
            const deletePP = await deleteProfilePicture(userId);

            // check if user profile picture is successfully deleted
            if (!(deletePP.result === "ok")) {
                throw new Error(
                    "Error deleting user profile picture from cloudinary"
                );
            }

            // if user profile picture is deleted, delete the user
            const deleteUser = await User.findOneAndDelete({ _id: userId });

            // if user is not deleted, return 404 error
            if (!deleteUser) {
                return res.status(404).json({ message: "User not found" });
            }
        }

        res.status(200).json({
            message: `User with ID ${userId} and all its data are deleted successfully`,
        });
    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error.message}`,
        });
    }
};

module.exports = deleteUser;
