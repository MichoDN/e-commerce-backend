const { Orders, ProductsInOrder, Products } = require('../models')

class OrdersServices {
    static async create(newOrder) {
        try {
            const createdOrder = await Orders.create(newOrder);
            return createdOrder
        } catch (err) {
            throw (err);
        }
    };

    static async getAll(userId) {
        try {
            const result = await Orders.findAll({
                where: {userId},
                attributes: ["id", "totalPrice", "createdAt"],
                include: {
                    model: ProductsInOrder,
                    attributes: ["quantity", "price"],
                    include: {
                        model: Products,
                        attributes: ["name", "price"]
                    }
                }
            })
            return result
        } catch (err) {
            throw (err);
        }
    };
}

module.exports = OrdersServices;