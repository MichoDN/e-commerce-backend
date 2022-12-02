const { Users, Orders, ProductsInOrder, Products, ProductsInCart, Cart } = require('./index')

const initModels = () => {
    Orders.belongsTo(Users, {foreignKey: "userId"});
    Users.hasMany(Orders, {foreignKey: "userId"});

    ProductsInOrder.belongsTo(Orders, {foreignKey: "orderId"});
    Orders.hasMany(ProductsInOrder, {foreignKey: "orderId"});

    ProductsInOrder.belongsTo(Products, {foreignKey: "productId"});
    Products.hasMany(ProductsInOrder, {foreignKey: "productId"});

    Cart.belongsTo(Users, {foreignKey: "userId"});
    Users.hasOne(Cart, {foreignKey: "userId"});

    ProductsInCart.belongsTo(Cart, {foreignKey: "cartId", as: "productsInCart"})
    Cart.hasMany(ProductsInCart, {foreignKey: "cartId", as: "productsInCart"});

    ProductsInCart.belongsTo(Products, {foreignKey: "productId"});
    Products.hasMany(ProductsInCart, {foreignKey: "productId"});
};

module.exports = initModels;