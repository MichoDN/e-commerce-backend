const { Router } = require('express');
const { getAllProducts, createProduct, deleteProduct, getProductById } = require('../controllers/products.controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary: Post a new product
 *     tags: [Product Post]
 *     requestBody:
 *       description: To create a new Product, you need a name, price and available Quantity
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/productRegister"
 *     responses:
 *       200:
 *         description: Product created response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created successfully
 *                 createdProduct:
 *                   $ref: "#/components/schemas/products"
 *   get:
 *     summary: Get all products
 *     tags: [Product GetAll]
 *     responses:
 *       200:
 *         description: Array of all products in store
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 oneOf:
 *                   - $ref: "#/components/schemas/products"
 *                   - $ref: "#/components/schemas/products"
 * /api/v1/products/{id}:
 *   get:
 *     summary: Get a product
 *     tags: [Product getById]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: productId
 *     responses:
 *       200:
 *         description: Product returned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/products"
 *   delete:
 *     summary: delete a product
 *     tags: [Product deleteById]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: productId
 *     responses:
 *       200:
 *         description: Product deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product deleted sucesfully"
 *                 productDeleted:
 *                   $ref: "#/components/schemas/products"
 */

router.post('/products', createProduct);
router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProduct);

module.exports = router;