## setup

install nodemon for hot reload

```
npm install nodemon -g
```

install packages

```
npm install
```

#### start server
start server using nodemo

```
npm start
```

or

start server without nodemon(no hot reloading)

```
node server.js
```

## generate json data

```
node mocks/factory/<js-file-name>
// ~~.jsonを作成しましたと出ればおk
```

## test

```
npm run test
```

## add new data
- factoryにcreate~~.jsを作成、
- node factory/create~~.jsを実行
- server.jsにroutesの下に処理を記述

## models api
- first(key string, target any): Object
    - keyとtargetが等しくなる最初の要素を返す
- find(key string, target any): Array
    - keyとtargetが等しくなる要素の配列を返す
- all()
    - 全て要素を含むの配列を返す

## path aliases
- requireのpathについて[module-alias](https://www.npmjs.com/package/module-alias)というpackageを使っている
  - package.jsonに_moduleAliasesを登録
  - ファイルの先頭に`require('module-alias/register')`を記述することでエイリアスが有効になる

## pakages
- [express](https://github.com/expressjs/express)
- [supertest](https://github.com/visionmedia/supertest)
- [jest](https://github.com/facebook/jest)

## memo
- https://scrapbox.io/for-share/Cookie



