const AuthServices = require("../services/auth.services");

const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);
        if (result) {
            const { id, userName, email } = result.result
            const user = { id, userName, email };
            const token = await AuthServices.genToken(user);
            user.token = token;
            res.status(201).json(user);
        } else {
            res.status(400).json({ message: "Contraseña incorrecta" })
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Email invalido"
        });
    }
};

module.exports = {
    userLogin,
};