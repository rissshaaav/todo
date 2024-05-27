const User = require("../models/user.model.js");
const { uploadProfilePicture } = require("../utils/cloudinary.utils.js");

const newUser = async (req, res) => {
    try {
        // extract username and password from request body
        const { name, email, username, password } = req.body;

        // check if username and password are provided
        if (!(name && email && username && password)) {
            return res.status(400).json({
                message:
                    "Name, email, username & password fields are mandatory",
            });
        }

        // check if the user already exists
        const existingUserCount = await User.countDocuments({
            $or: [{ username }, { email }],
        });
        if (existingUserCount > 0) {
            return res
                .status(409)
                .json({ message: "Username or email already exists" });
        }

        // check if profile picture is uploaded
        if (!req.file) {
            throw new Error("Error uploading profile picture");
        }

        // get profile picture path and upload to cloudinary
        const profilePictureLocalPath = req.file.path;
        const profilePictureLink = await uploadProfilePicture(
            profilePictureLocalPath,
            username
        );

        // check if profile picture is uploaded successfully
        if (!profilePictureLink) {
            throw new Error("Error uploading profile picture");
        }

        // create a new user and save to database
        const user = new User({
            name,
            email,
            profilePictureLink,
            username,
            password,
        });
        const savedUser = await user.save();

        // send the saved user as the response
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({
            message: `New User Controller: Internal server error: ${error.message}`,
        });
    }
};

module.exports = newUser;
