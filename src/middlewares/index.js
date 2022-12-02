const handleError = require('./error.middleware');
const authenticate = require('./auth.middleware');
const getUsersCartId = require('./getUsersCartId.middleware');
const cartsTotalPrice = require('./cartsTotalPrice.middleware.js');

module.exports = {
    handleError,
    authenticate,
    getUsersCartId,
    cartsTotalPrice
};