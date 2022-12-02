const { Router } = require('express');
const { getCartByUserId, addProductToCart, removeProductFromCart } = require('../controllers/cart.controllers');
const { authenticate } = require('../middlewares');

const router = Router();

/**
 * @openapi
 * /api/v1/cart:
 *   post:
 *     summary: insert a new product in a user cart.
 *     tags: [Cart instertProduct]
 *     requestBody:
 *       description: To insert a product into your cart, you must send an object with productId and quantity properties
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CartInsert"
 *     responses:
 *       200:
 *         description: inserted product response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/addedToCart"
 *   get:
 *     summary: Get the users cart.
 *     tags: [Cart getUsersCart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Product created response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPrice:
 *                   type: integer
 *                   example: 20000
 *                 productsInCart:
 *                   type: array
 *                   items:
 *                     oneOf:
 *                       - $ref: "#/components/schemas/productInCart"
 *                       - $ref: "#/components/schemas/productInCart"
 * /api/v1/cart/{id}:
 *   delete:
 *     summary: Remove product from cart.
 *     tags: [Cart instertProduct]
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
 *         description: inserted product response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "product deleted succesfully"
 *                 removedProduct:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 23
 *                     cartId:
 *                       type: integer
 *                       example: 5
 *                     productId:
 *                       type: integer
 *                       example: 2
 *                     quantity:
 *                       type: integer
 *                       example: 3
 *                     price:
 *                       type: integer
 *                       example: 35000
 *                       
 *        
 */

router.post('/cart', authenticate, addProductToCart);
router.get('/cart', authenticate, getCartByUserId);
router.delete('/cart/:id', authenticate, removeProductFromCart);

module.exports = router;