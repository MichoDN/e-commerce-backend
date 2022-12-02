const { Router } = require('express');
const { deleteCart } = require('../controllers/cart.controllers');
const { getAllUsers, createUser, deleteUser, getUserById } = require('../controllers/users.controllers');
const { authenticate } = require('../middlewares');

const router = Router();
/** 
 * @openapi
 * /api/v1/users/register:
 *   post:
 *     summary: Create a new user
 *     tags: [User Register]
 *     requestBody:
 *       description: To register a new user you need a username, email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/userRegister"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *                 createdUser:
 *                   $ref: "#/components/schemas/Users"
 * /api/v1/users/info:
 *   get:
 *     tags: [User GetInfo]
 *     security:
 *       - bearerAuth: []
 *     summary: Obtain users info using his bearerToken
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Users"
 * /api/v1/users/delete:
 *   delete:
 *     tags: [User Delete]
 *     security:
 *       - bearerAuth: []
 *     summary: Delete Actual user using his bearerToken
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted Succesfully
 *                 deletedUser:
 *                   $ref: "#/components/schemas/Users"
*/

router.post('/users/register', createUser);
// router.get('/users', getAllUsers); //DEV

router.get('/users/info', authenticate, getUserById);
router.delete('/users/delete', authenticate, deleteCart, deleteUser);


module.exports = router;