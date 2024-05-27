const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadProfilePicture = async(localFilePath, userId) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "profile_pictures",
            resource_type: "image",
            public_id: userId,
            
        });
        console.log(response);
        return response.url;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log(error.message);
        return null;
    }
}

module.exports = { uploadProfilePicture };