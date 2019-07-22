// enable module-alias package
require('module-alias/register')

const { Router } = require('express')
const router = Router()

// =======================
// import constants
// =======================
var spaces = require("@mocks_jsons/spaces.json");

// =======================
// import models
// =======================
var Space = require("@mock_models/spaces")

// =======================
// initialize models
// =======================
// TODO: test models
const SpaceModel = new Space(spaces)

// =======================
// defined routes
// =======================
/* GET spaces */
router.get('/v1/spaces', function (req, res) {
    const spaces = SpaceModel.all()
    res.json(spaces)
})

/* GET specific space */
router.get('/v1/spaces/:id', function (req, res) {
    const id = req.params.id;
    const space = SpaceModel.first("id", id)
    res.json(space);
})


module.exports = router