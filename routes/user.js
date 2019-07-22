const { Router } = require('express')
const router = Router()

var users_handler = require("../handlers/users_handler")

// =======================
// defined routes
// =======================
/* GET users */
router.get('/v1/users', users_handler.get_users)

/* GET specific user */
router.get('/v1/users/:id', users_handler.get_user)


module.exports = router