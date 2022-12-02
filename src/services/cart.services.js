const { Cart, ProductsInCart, Products } = require('../models')

class CartServices {
    static async create(userId) {
        try {
            await Cart.create(userId);
        } catch (err) {
            throw (err);
        }
    };

    static async addToCart(inCartProduct) {
        try {
            const productAdded = await ProductsInCart.create(inCartProduct);
            return productAdded;
        } catch (err) {
            throw (err);
        }
    };

    static async getByUserId(userId) {
        try {
            const result = await Cart.findOne({
                where: { userId },
                attributes: ["totalPrice"],
                include: {
                    model: ProductsInCart,
                    as: "productsInCart",
                    attributes: ["quantity", "price"],
                    include: {
                        model: Products,
                        attributes: ["id", "name", "price"]
                    }
                }
            });
            return result
        } catch (err) {
            throw (err);
        }
    };

    static async delete(id) {
        try {
            const deletedCart = await Cart.findByPk(id);
            await Cart.destroy({ where: { userId: id } })
        } catch (err) {
            throw (err);
        }
    };

    static async removeProduct(cartId, productId) {
        try {
            await ProductsInCart.destroy({ where: { cartId, productId } });
        } catch (err) {
            throw (err);
        }
    };
}

module.exports = CartServices;