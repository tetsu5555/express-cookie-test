// enable module-alias package
require('module-alias/register')

const { Router } = require('express')
const router = Router()

// =======================
// defined routes
// =======================
/* GET hello message */
router.get('/hello', function (req, res, next) {
    res.json({message: "hello world"})
})


module.exports = router