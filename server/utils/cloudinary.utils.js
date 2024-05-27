const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// !BUG: storing profilepicture by username is not a good idea
// ! as usernames can be changed and hence profile picture will be lost

const uploadProfilePicture = async (localFilePath, username) => {
    try {
        // check if local file path is provided
        if (!localFilePath) return null;

        // upload profile picture to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "profile_pictures", // folder in cloudinary
            resource_type: "image", // type of file
            public_id: username, // name of the file
        });
        fs.unlinkSync(localFilePath); // delete the local file
        return response.url; // return the cloudinary url
    } catch (error) {
        fs.unlinkSync(localFilePath); // delete the local file
        console.log("cloudinary.utils", error.message);
        return null; // return null if error
    }
};

module.exports = { uploadProfilePicture };
