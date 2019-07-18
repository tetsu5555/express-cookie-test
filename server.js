// server.js

// 定数のimport
var cons = require('./myconstants.js');
// 必要なパッケージの読み込み
var express = require('express');
var app = express();
var cors = require('cors')
var cookieParser = require('cookie-parser');




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

app.get('/v1/shops', function (req, res) {
    res.json(cons.shops)
})




//サーバ起動
app.listen(port);
console.log('listen on port ' + port);