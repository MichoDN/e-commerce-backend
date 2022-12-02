const ProductsServices = require("../services/products.services");

const getAllProducts = async (req, res, next) => {
    try {
        const products = await ProductsServices.getAll();
        res.json(products);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request was done incorrectly",
        });
    }
};

const getProductById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await ProductsServices.getById(id);
        res.json(product);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request was done incorrectly",
        });
    }
};

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const createdProduct = await ProductsServices.create(newProduct);
        res.status(201).json({
            message: "Product created successfully",
            createdProduct: createdProduct
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request has not enough data to be completed",
        });
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedProduct = await ProductsServices.delete(id);
        res.status(201).json({
            message: "Product deleted sucesfully",
            deletedProduct: deletedProduct
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Request was done incorrectly",
        });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    getProductById
};