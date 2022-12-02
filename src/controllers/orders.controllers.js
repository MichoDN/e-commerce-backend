const { getUsersCartId, cartsTotalPrice } = require("../middlewares");
const { ProductsInCart, Products, ProductsInOrder } = require("../models");
const OrdersServices = require("../services/orders.services");

const createOrder = async (req, res, next) => {
    try {
        const usersCart = await getUsersCartId(req);
        const productsInCart = await ProductsInCart.findAll({ where: { cartId: usersCart.id } });

        if (productsInCart.length > 0) {
            const products = await Products.findAll();
            const noStockProducts = [];
            products.forEach((productInStore) => {
                productsInCart.forEach((productInCart) => {
                    if (productInStore.id === productInCart.productId) {
                        if (productInStore.availableQty - productInCart.quantity < 0) {
                            noStockProducts.push(productInStore);
                        };
                    };
                });
            });

            if (noStockProducts.length === 0) {
                const { userId } = req;
                const newOrder = {
                    userId,
                    totalPrice: usersCart.totalPrice
                };
                const createdOrder = await OrdersServices.create(newOrder);
                productsInCart.forEach(async(product) => {
                    const inStoreProduct = await Products.findOne({ where: { id: product.productId } });
                    inStoreProduct.availableQty -= product.quantity;
                    await inStoreProduct.save();

                    const newProductInOrder = {
                        orderId: createdOrder.id,
                        productId: product.productId,
                        quantity: product.quantity,
                        price: product.price
                    };
                    await ProductsInOrder.create(newProductInOrder);
                });
                
                await ProductsInCart.destroy({ where: { cartId: usersCart.id } });
                await cartsTotalPrice(usersCart.id);
                res.status(201).json("Cart purchased succesfully");
            } else {
                res.status(400).json({
                    status: 400,
                    message: "There is no stock enough to make this purchase"
                });
            }
        } else res.status(400).json("Empty carts can't be purchased");
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Bad request'
        });
    }
}

const getAllOrders = async (req, res, next) => {
    try {
        const { userId } = req;
        const result = await OrdersServices.getAll(userId)
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Bad request'
        });
    }
}

module.exports = {
    createOrder,
    getAllOrders
};