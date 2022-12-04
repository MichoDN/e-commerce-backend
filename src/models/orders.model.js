const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     usersOrders:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *             example: 4
 *           totalPrice:
 *             type: integer
 *             example: 900
 *           createdAt:
 *             type: string
 *             example: "2022-12-04T01:24:35.312Z"
 *           products_in_orders:
 *             type: array
 *             items:
 *               oneOf:
 *                 - $ref: "#/components/schemas/productsInOrder1"
 *                 - $ref: "#/components/schemas/productsInOrder2"
 *     productsInOrder1:
 *       type: object
 *       properties:
 *         quantity: 
 *           type: integer
 *           example: 10
 *         price:
 *           type: integer
 *           example: 400
 *         product:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Queso"
 *             price:
 *               type: integer
 *               example: 40
 *     productsInOrder2:
 *       type: object
 *       properties:
 *         quantity: 
 *           type: integer
 *           example: 10
 *         price:
 *           type: integer
 *           example: 500
 *         product:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Jamon"
 *             price:
 *               type: integer
 *               example: 40
 */

const Orders = db.define(
    'orders',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            field: "user_id",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // status : {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }
    }
)

module.exports = Orders;