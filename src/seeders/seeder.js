const { Users, Products } = require('../models');
const db = require('../utils/database');

// const users = [
//     {
//         "userName": "Michael",
//         "email": "Michael@mail.com",
//         "password": "Michael1234"
//     },
//     {
//         "userName": "Jose",
//         "email": "Jose@mail.com",
//         "password": "Jose1234"
//     },
//     {
//         "userName": "Eudys",
//         "email": "Eudys@mail.com",
//         "password": "Eudys1234"
//     },
//     {
//         "userName": "Jeranny",
//         "email": "Jeranny@mail.com",
//         "password": "Jeranny1234"
//     },
//     {
//         "userName": "Isabel",
//         "email": "Isabel@mail.com",
//         "password": "Isabel1234"
//     },
//     {
//         "userName": "Eduard",
//         "email": "Eduard@mail.com",
//         "password": "Eduard1234"
//     },
//     {
//         "userName": "Vidal",
//         "email": "Vidal@mail.com",
//         "password": "Vidal1234"
//     },
//     {
//         "userName": "Smerlyn",
//         "email": "Smerlyn@mail.com",
//         "password": "Smerlyn1234"
//     },
//     {
//         "userName": "Yhamil",
//         "email": "Yhamil@mail.com",
//         "password": "Yhamil1234"
//     },
//     {
//         "userName": "Henry",
//         "email": "Henry@mail.com",
//         "password": "Henry1234"
//     },
// ]

// const products = [
//     {
//         "name": "Celular",
//         "price": 10000,
//         "availableQty": 100
//     },
//     {
//         "name": "Television",
//         "price": 25000,
//         "availableQty": 50
//     },
//     {
//         "name": "PC Gamer",
//         "price": 40000,
//         "availableQty": 10
//     },
//     {
//         "name": "Cheetos",
//         "price": 10,
//         "availableQty": 10000
//     },
//     {
//         "name": "Doritos",
//         "price": 20,
//         "availableQty": 7000
//     },
//     {
//         "name": "Gilette",
//         "price": 5,
//         "availableQty": 15000
//     },
//     {
//         "name": "Perfume",
//         "price": 50,
//         "availableQty": 5000
//     },
//     {
//         "name": "USB Memory",
//         "price": 10,
//         "availableQty": 2000
//     },
//     {
//         "name": "Alcohol etilico",
//         "price": 25,
//         "availableQty": 2500
//     },
//     {
//         "name": "UPS",
//         "price": 2500,
//         "availableQty": 1000
//     },
// ]

db.sync({ force: false })
    .then(async () => {
        console.log("DB Initializing plantation");
        // users.forEach((user) => { Users.create(user) });
    })
    .then(async () => {
        products.forEach((product) => { Products.create(product) });
    })
    .then(() => { console.log("Plantation Finished"); });