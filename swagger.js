const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Michael's E-commerce API",
            version: "1.0.0",
            description: "E-commerce api for portfolio"
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/models/users.model.js",

        "./src/routes/auth.routes.js",

        "./src/routes/products.routes.js",
        "./src/models/products.model.js",

        "./src/routes/cart.routes.js",
        "./src/models/cart.model.js",

        "./src/routes/orders.routes.js",
        "./src/models/orders.model.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec)
    });

    console.log(`Check the Doc in https://e-commerce-michael.up.railway.app/api/v1/docs/`);
}

module.exports = swaggerDocs;