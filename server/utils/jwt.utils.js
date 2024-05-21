const jwt = require("jsonwebtoken");

const generateJWT = (payload, expiresIn) => {
    const secretKey = process.env.JWT_KEY;
    try {
        return jwt.sign(payload, secretKey, { expiresIn });
    } catch (error) {
    console.error("Error generating JWT: ", error);
    return null;
}
};

const verifyJWT = (token) => {
    const secretKey = process.env.JWT_KEY;
    try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return null;
  }
};

module.exports = { generateJWT, verifyJWT };
