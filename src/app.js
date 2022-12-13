const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");

const { usersRoutes, productsRoutes, authRoutes, cartRoutes, ordersRoutes } = require("./routes");
const { handleError } = require("./middlewares");

const app = express();
app.use(express.json());

initModels();

db.authenticate()
    .then(() => console.log('DB Authentication succesful'))
    .catch(err => console.log(err));

db.sync({ force: false })
    .then(() => {
        console.log("DB Synchronized")
        console.log("////////////////////////////////////////////////////////////////////////////")
    })
    .catch(err => console.log(err));

app.get('/', (req, res, next) => {
    res.status(200).json("OK");
    next();
});

app.use('/api/v1', usersRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productsRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', ordersRoutes);

app.use(handleError);

module.exports = app;