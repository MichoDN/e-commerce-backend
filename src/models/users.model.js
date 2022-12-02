const db = require('../utils/database');
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt")

/** 
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: Rafaelo
 *         email:
 *           type: string
 *           example: Rafaelo@gmail.com
 *     userRegister:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           example: Rafaelo
 *         email:
 *           type: string
 *           example: Rafaelo@gmail.com
 *         password:
 *           type: string
 *           example: Rafaelo
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
*/

const Users = db.define(
    "Users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userName: {
            field: "username",
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                const { password } = user;
                const hash = bcrypt.hashSync(password, 8);
                user.password = hash;
            },
        },
    }
);

module.exports = Users;