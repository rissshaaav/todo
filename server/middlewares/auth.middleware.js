const { verifyJWT } = require("../utils/jwt.utils");

const auth = async (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const token = req.header("Authorization").replace("Bearer ", "");

        // Verify & extract the token
        const _id = verifyJWT(token);

        // if the token is invalid, throw an error
        if (!_id) {
            throw new Error();
        }

        // set the user id in the request object
        req.body.userId = _id;

        next();
    } catch (e) {
        res.status(401).send({ message: "Please authenticate." });
    }
};

module.exports = auth;
