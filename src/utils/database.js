require("dotenv").config();
const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized:false
    //     }
    // }
});

module.exports = db;