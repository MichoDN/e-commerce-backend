const { getUsersCartId, cartsTotalPrice } = require("../middlewares");
const { Products, Cart, ProductsInCart } = require("../models");
const CartServices = require("../services/cart.services");

const createCart = (userId) => {
    try {
        CartServices.create({ userId });
    } catch (error) {
        console.log(error)
    }
}

const addProductToCart = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const usersCart = await getUsersCartId(req);

        const matchedProduct = await ProductsInCart.findOne({ where: { cartId: usersCart.id, productId } })
        if (quantity < 1) {
            res.status(400).json("You can't add to cart a quantity of 0 of any products");

        } else if (matchedProduct) {
            res.status(400).json("You can't add the same product twice");

        } else {
            const productInfo = await Products.findOne({ where: { id: productId } });

            if (productInfo.availableQty < quantity) {
                res.status(400).json("They are not enough product in stock");

            } else {
                const inCartProduct = {
                    cartId: usersCart.id,
                    productId: productInfo.id,
                    quantity: quantity,
                    price: quantity * productInfo.price
                };
                //Add to cart
                const productAdded = await CartServices.addToCart(inCartProduct);

                //Update TotalPrice
                await cartsTotalPrice(usersCart.id);

                res.status(201).json(productAdded);
            }
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Make sure you are sending a proper productID'
        });
    }
}

const getCartByUserId = async (req, res, next) => {
    try {
        const userId = req.userId;
        const cart = await CartServices.getByUserId(userId);
        res.status(201).json(cart);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Something went wrong'
        });
    }
}

const deleteCart = async (req, res, next) => {
    try {
        const id = req.userId
        await CartServices.delete(id)
        next();
    } catch (error) {
        console.log(error)
    }
}

const removeProductFromCart = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const cart = await getUsersCartId(req);
        const removedProduct = await ProductsInCart.findOne({ where: { cartId: cart.id, productId } });
        if (removedProduct) {
            await CartServices.removeProduct(cart.id, productId);
            await cartsTotalPrice(cart.id);
            res.status(201).json({
                message: "Product Deleted successfully",
                removedProduct
            });
        } else {
            res.status(400).json({
                message: "You cant remove a product that is not in your cart"
            })
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    getCartByUserId,
    createCart,
    deleteCart,
    addProductToCart,
    removeProductFromCart
};