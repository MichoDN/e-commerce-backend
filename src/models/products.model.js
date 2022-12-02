const db = require('../utils/database');
const { DataTypes } = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Doritos
 *         price:
 *           type: integer
 *           example: 20
 *         availableQty:
 *           type: integer
 *           example: 5000
 *     productRegister:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Computador
 *         price:
 *           type: integer
 *           example: 40000
 *         availableQty:
 *           type: integer
 *           example: 50
 */
const Products = db.define(
    'products',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        availableQty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // status: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // },
        // userId: {
        //     field: "user_id",
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
    },
    {
        timestamps: false
    }
)

module.exports = Products;