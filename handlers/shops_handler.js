// =======================
// import constants
// =======================
var shops = require("../mocks/jsons/shops.json");
var spaces = require("../mocks/jsons/spaces.json");

// =======================
// import models
// =======================
var Shop = require("../mocks/models/shops")
var Space = require("../mocks/models/spaces")

// =======================
// initialize models
// =======================
// TODO: test models
const ShopModel = new Shop(shops)
const SpaceModel = new Space(spaces)

// =======================
// defined handlers
// =======================
const get_shop_spaces = (req, res) => {
    const shop_id = req.params.shop_id;
    const spaces = SpaceModel.find("shop_id", shop_id)
    res.json(spaces);
}

const get_shops = (req, res) => {
    const shops = ShopModel.all()
    res.json(shops)
}

const get_shop = (req, res) => {
    const id = req.params.id;
    const shop = ShopModel.first("id", id)
    res.json(shop);
}

module.exports = {
    get_shop_spaces,
    get_shops,
    get_shop
}