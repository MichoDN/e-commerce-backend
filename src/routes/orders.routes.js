const { Router } = require('express');
const { createOrder, getAllOrders } = require('../controllers/orders.controllers');
const { authenticate } = require('../middlewares');

const router = Router();
/**
 * @openapi
 * /api/v1/orders:
 *   post:
 *     summary: Purchase users cart
 *     tags: [Cart Purchase]
 *     security:
 *       - bearerAuth: []
 *     description: a
 *     responses:
 *       200:
 *         description: Request done succesfully.
 *         content:
 *           application/json:
 *             schema:
 *               Type: string
 *               example: "Cart purchased succesfully"
 *   get: 
 *     summary: Obtain the cart using de userId
 *     tags: [Orders getByUserId]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Request done succesfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/usersOrders"
 */

router.post('/orders', authenticate, createOrder);
router.get('/orders', authenticate, getAllOrders);

module.exports = router;