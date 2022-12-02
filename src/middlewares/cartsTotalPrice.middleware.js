const { Cart, ProductsInCart } = require("../models");

const cartsTotalPrice = async (usersCartId) => {
    const cart = await Cart.findOne({ where: { id: usersCartId } })

    const inCartProducts = await ProductsInCart.findAll({ where: { cartId: cart.id } });

    cart.totalPrice = 0;

    inCartProducts.map(product => cart.totalPrice += product.price);

    cart.save();
}

module.exports = cartsTotalPrice;