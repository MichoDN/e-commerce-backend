const db = require('../utils/database');
const { DataTypes } = require('sequelize');

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