const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductsInCart = db.define(
    'products_in_cart',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cartId: {
            field: "cart_id",
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

module.exports = ProductsInCart;