const { verifyJWT } = require('../utils/jwt.utils');

const authenticator = async (req, res) => {
    const authToken = req.cookies.doitAuthCookie;
    if(authToken == null || authToken === '') {
        res.status(401).json({ isAuthenticated: false });
        return;
    }
    const isAuthenticated = !!verifyJWT(authToken);
    if(!isAuthenticated) {
        res.status(401).json({ isAuthenticated });
        return;
    }
    res.status(200).json({ isAuthenticated });
}

module.exports = authenticator;