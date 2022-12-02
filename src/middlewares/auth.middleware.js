const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
        const token = bearerToken.split("Bearer ")[1];
        try {
            const decoded = jwt.verify(token, process.env.SECRET, "HS512");
            const { id } = decoded;
            req.userId = id;
            next();
        } catch (error) {
            next({
                status: 400,
                errorContent: error,
                message: "Invalid Token",
            });
        }
    } else {
        next({
            status: 400,
            errorContent: error,
            message: "No token founded",
        });
    }
}

module.exports = authenticate;