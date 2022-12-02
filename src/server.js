require("dotenv").config();
const app = require('./app');
const swaggerDocs = require('../swagger');

const PORT = process.env.PORT || 8001;

const server = app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
    swaggerDocs(app, PORT);
});

module.exports = server;