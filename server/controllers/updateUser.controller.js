const User = require("../models/user.model");

const updateUser = async (req, res) => {
    try {
        // Destructuring the request body
        const { userId, name, username, profilePictureLink, password } =
            req.body;

        //  Checking if userId is provided
        if (!userId) {
            return res.status(400).json({ message: "userId is mandatory" });
        }

        // Checking if at least one field is provided
        if (name || username || profilePictureLink || password) {
            // >NOTE: Using findOne() with save() instead of
            // > findOneAndUpdate() to trigger the pre-save hook

            // Finding the user by userId
            const retrievedUser = await User.findOne({ _id: userId });

            // Checking if the user exists
            if (!retrievedUser) {
                return res.status(404).json({ message: "User not found" });
            } else {
                // Updating the user fields
                retrievedUser.name = name ?? retrievedUser.name;
                retrievedUser.username = username ?? retrievedUser.username;
                retrievedUser.profilePictureLink =
                    profilePictureLink ?? retrievedUser.profilePictureLink;

                // retrievedUser.password = password ?? retrievedUser.password;
                // !BUG: retrievedUser.password is already hashed and cannot be updated directly
                //! because that'll hash the hashed password again and eventually
                //! the user won't be able to login
                // ~SOLUTION: create a separate PATCH route to update password

                // Saving the updated user
                const updatedUser = await retrievedUser.save();
                res.status(200).json(updatedUser);
            }
        }
    } catch (error) {
        res.status(500).json({
            message: `Internal Server Error: ${error.message}`,
        });
    }
};

module.exports = updateUser;
