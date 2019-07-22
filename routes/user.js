const { Router } = require('express')
const router = Router()

// =======================
// import constants
// =======================
var users = require("../jsons/users.json");

// =======================
// import models
// =======================
var User = require("../model/users")

// =======================
// initialize models
// =======================
// TODO: test models
const UserModel = new User(users)

// =======================
// defined routes
// =======================
/* GET users */
router.get('/v1/users', function (req, res) {
    const users = UserModel.all()
    res.json(users)
})

/* GET specific user */
router.get('/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const user = UserModel.first("id", id)
    res.json(user);
})


module.exports = router