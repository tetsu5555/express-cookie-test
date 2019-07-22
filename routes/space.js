const { Router } = require('express')
const router = Router()

var spaces_handler = require("@handlers/spaces_handler")

// =======================
// =======================
/* GET spaces */
router.get('/v1/spaces', spaces_handler.get_spaces)

/* GET specific space */
router.get('/v1/spaces/:id', spaces_handler.get_space)

module.exports = router