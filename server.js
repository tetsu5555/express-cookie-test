// server.js

// =======================
// import constants
// =======================
var cons = require('./myconstants.js');
var users = require("./jsons/users.json");
var shops = require("./jsons/shops.json");
var spaces = require("./jsons/spaces.json");

// =======================
// packages
// =======================
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');


// =======================
// middlewares
// =======================
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// =======================
// variables
// =======================
const port = process.env.PORT || 3001;
// expressでAPIサーバを使うための準備
// var router = express.Router();


// =======================
// routes
// =======================
app.get('/', function (req, res) {
    res.json({
        message: 'ok'
    })
})

// 正しく実行出来るか左記にアクセスしてテストする (GET http://localhost:3001/)
app.get('/cookietest', function (req, res) {
    // console.log(req.query)
    res.cookie('test1', 'aaa', {
        maxAge: 60000,
        httpOnly: true
    });
    res.cookie('test2', 'aaa');
    res.json({
        message: 'Successfully Posted a test message.'
    });
});

app.get('/v1/spaces', function (req, res) {
    res.json(cons.spaces)
})

app.get('/v1/spaces/:id', function (req, res) {
    const id = req.params.id;
    const space = spaces.filter(space => {
        return space.id == id;
    });
    res.json(space[0]);
})

app.get('/v1/shops/:id/spaces', (req, res) => {
    const id = req.params.id;
    const res_spaces = spaces.filter(space => {
        return space.shop_id == id;
    });
    res.json(res_spaces);
})

app.get('/v1/shops', function (req, res) {
    res.json(shops)
})

app.get('/v1/shops/:id', (req, res) => {
    const id = req.params.id;
    const shop = shops.filter(shop => {
        return shop.id == id;
    });
    res.json(shop[0]);
})

app.get('/v1/users', function (req, res) {
    res.json(users)
})

app.get('/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.filter(user => {
        return user.id == id;
    });
    res.json(user);
})


// =======================
// start server
// =======================
app.listen(port);
console.log('listen on port ' + port);