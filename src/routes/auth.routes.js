const { Router } = require('express');
const { userLogin } = require('../controllers/auth.controllers');

const router = Router();
/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login with an exiting user
 *     tags: [User Login]
 *     requestBody:
 *       description: You will need email and password of the user previusly registered
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: Michael@mail.com
 *               password:
 *                 type: string
 *                 example: michael1234
 *     responses:
 *       200:
 *         description: Request done succesfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: Michael
 *                 email:
 *                   type: string
 *                   example: Michael@mail.com
 *                 password:
 *                   type: string
 *                   example: asdasdewfwjeflwe/wemnfdwkle.wekfmklwef.weifwekf
 */

router.post('/auth/login', userLogin)

module.exports = router;