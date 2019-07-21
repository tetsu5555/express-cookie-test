## setup

install nodemon for hot reload

```
npm install nodemon -g
```

install packages

```
npm install
```

start server using nodemo

```
npm start
```

start server without nodemon(no hot reloading)

```
node server.js
```

generate json data

```
node factory/<js-file-name>
// ~~.jsonを作成しましたと出ればおk
```

## add new data
- factoryにcreate~~.jsを作成、
- node factory/create~~.jsを実行
- server.jsにroutesの下に処理を記述

## models api
- find(key string, target any): Array
    - keyとtargetが等しくなる最初の要素を返す
- find(key string, target any): Array
    - keyとtargetが等しくなる要素の配列を返す
- all()
    - 全て要素を含むの配列を返す

## memo
https://scrapbox.io/for-share/Cookie

