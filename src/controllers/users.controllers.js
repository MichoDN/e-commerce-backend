const UsersServices = require('../services/users.services');
const { createCart } = require('./cart.controllers');

const getAllUsers = async (req, res, next) => { //DEV
    try {
        const users = await UsersServices.getAll();
        res.json(users);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Something is wrong in your request",
        });
    }
}

const createUser = async (req, res, next) => { 
    try {
        const newUser = req.body;
        const createdUser = await UsersServices.create(newUser);

        const userId = createdUser.id;
        createCart(createdUser.id);

        res.status(201).json({
            message: "User created successfully",
            createdUser: {
                id: createdUser.id,
                userName: createdUser.userName,
                email: createdUser.email
            }
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request has not enough data to be completed",
        });
    }
}

const getUserById = async (req, res, next) => {
    try {
        const id = req.userId;
        const User = await UsersServices.getById(id);
        res.json(User);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request was done incorrectly",
        });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.userId;
        const deletedUser = await UsersServices.delete(id);
        res.status(201).json({
            message: "User deleted sucesfully",
            deletedUser: deletedUser
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request was done incorrectly",
        });
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getUserById
}