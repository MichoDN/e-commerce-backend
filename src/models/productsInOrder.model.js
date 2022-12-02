const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductsInOrder = db.define(
    'products_in_order',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        orderId: {
            field: "order_id",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            field: "product_id",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // status: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }
    },
    {
        timestamps: false
    }
)

module.exports = ProductsInOrder;