const { Router } = require('express')
const router = Router()

var shops_handler = require("../handlers/shops_handler")

// =======================
// defined routes
// =======================
/* GET spaces related to shops */
router.get('/v1/shops/:shop_id/spaces', shops_handler.get_shop_spaces)

/* GET shops */
router.get('/v1/shops', shops_handler.get_shops)

/* GET specific shop */
router.get('/v1/shops/:id', shops_handler.get_shop)

module.exports = router