const { Users } = require('../models');

class UsersServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result
        } catch (err) {
            throw (err);
        }
    };

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {attributes: ["id", "userName", "email"]});
            return result
        } catch (err) {
            throw (err);
        }
    };

    static async create(newUser) {
        try {
            const createdUser = await Users.create(newUser);
            return createdUser
        } catch (err) {
            throw (err);
        }
    };

    static async delete(id) {
        try {
            const deletedUser = await Users.findByPk(id, {attributes: ["id", "userName", "email"]});
            Users.destroy({where: {id: id}})
            return deletedUser
        } catch (err) {
            throw (err);
        }
    };
}

module.exports = UsersServices;