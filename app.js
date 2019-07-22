// =======================
// import packages
// =======================
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

// =======================
// use middlewares
// =======================
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// =======================
// import routes
// =======================
var HelloRouter = require("./routes/hello")
var ShopRouter = require("./routes/shop")
var SpaceRouter = require("./routes/space")
var UserRouter = require("./routes/user")


// =======================
// routes
// =======================
app.use(HelloRouter)
app.use(ShopRouter)
app.use(SpaceRouter)
app.use(UserRouter)

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

module.exports = app