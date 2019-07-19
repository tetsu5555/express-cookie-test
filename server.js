// server.js

// 定数のimport
var cons = require('./myconstants.js');
const users = require("./jsons/users.json");
const shops = require("./jsons/shops.json");
const spaces = require("./jsons/spaces.json");

// 必要なパッケージの読み込み
var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// Cookieを使用するための記述
app.use(cookieParser());
// for cors
app.use(cors())




// 3001番を指定
var port = process.env.PORT || 3001;
// expressでAPIサーバを使うための準備
// var router = express.Router();





// route & handler
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



//サーバ起動
app.listen(port);
console.log('listen on port ' + port);