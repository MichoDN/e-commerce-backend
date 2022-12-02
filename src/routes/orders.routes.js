const { Router } = require('express');
const { createOrder, getAllOrders } = require('../controllers/orders.controllers');
const { authenticate } = require('../middlewares');

const router = Router();

router.post('/orders', authenticate, createOrder);
router.get('/orders', authenticate, getAllOrders);

module.exports = router;