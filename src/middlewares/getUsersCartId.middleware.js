const { Cart } = require("../models");

const getUsersCartId = async (req) => {
    const { userId } = req;
    const cart = await Cart.findOne({ where: { userId } });
    return cart
}

module.exports = getUsersCartId;