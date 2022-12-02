const { Products } = require('../models');

class ProductsServices {
    static async getAll() {
        try {
            const result = await Products.findAll();
            return result
        } catch (err) {
            throw (err);
        }
    };

    static async getById(id) {
        try {
            const result = await Products.findByPk(id);
            return result
        } catch (err) {
            throw (err);
        }
    };

    static async create(newProduct) {
        try {
            const createdProduct = await Products.create(newProduct);
            return createdProduct
        } catch (err) {
            throw (err);
        }
    };

    static async delete(id) {
        try {
            const deletedProduct = await Products.findByPk(id);
            Products.destroy({where: {id: id}})
            return deletedProduct
        } catch (err) {
            throw (err);
        }
    };
}

module.exports = ProductsServices;