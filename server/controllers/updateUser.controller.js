const User = require("../models/user.model");

const updateUser = async (req, res) => {
    try {
        // Destructuring the request body
        const { userId, name, username, profilePictureLink } = req.body;

        //  Checking if userId is provided
        if (!userId) {
            return res.status(400).json({ message: "userId is mandatory" });
        }

        // Checking if at least one field is provided
        if (name || username || profilePictureLink) {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $set: { name, username, profilePictureLink } },
                { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(updatedUser);
        }
    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error.message}`,
        });
    }
};

module.exports = updateUser;
