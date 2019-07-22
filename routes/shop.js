
const { Router } = require('express')
const router = Router()

// =======================
// import constants
// =======================
var shops = require("../jsons/shops.json");
var spaces = require("../jsons/spaces.json");

// =======================
// import models
// =======================
var Shop = require("../model/shops")
var Space = require("../model/spaces")

// =======================
// initialize models
// =======================
// TODO: test models
const ShopModel = new Shop(shops)
const SpaceModel = new Space(spaces)

// =======================
// defined routes
// =======================
/* GET spaces related to shops */
router.get('/v1/shops/:shop_id/spaces', (req, res) => {
    const shop_id = req.params.shop_id;
    const spaces = SpaceModel.find("shop_id", shop_id)
    res.json(spaces);
})

/* GET shops */
router.get('/v1/shops', function (req, res) {
    const shops = ShopModel.all()
    res.json(shops)
})

/* GET specific shop */
router.get('/v1/shops/:id', (req, res) => {
    const id = req.params.id;
    const shop = ShopModel.first("id", id)
    res.json(shop);
})


module.exports = router