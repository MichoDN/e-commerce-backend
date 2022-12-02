const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     CartInsert:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 10
 *     addedToCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         cartId:
 *           type: integer
 *           example: 15
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 7
 *         price:
 *           type: integer
 *           example: 300
 *     productInCart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: integer
 *           example: 10
 *         price:
 *           type: integer
 *           example: 10000
 *         productId:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             name:
 *               type: string
 *               example: Celular
 *             price:
 *               type: integer
 *               example: 10000
 */

const Cart = db.define(
    'cart',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            field: "user_id",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            field: "total_price",
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
    },
    {
        timestamps: false
    }
)

module.exports = Cart;