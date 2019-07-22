// =======================
// import constants
// =======================
var spaces = require("../mocks/jsons/spaces.json");

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
// defined handlers
// =======================
const get_spaces = function (req, res) {
    const spaces = SpaceModel.all()
    res.json(spaces)
}

const get_space = function (req, res) {
    const id = req.params.id;
    const space = SpaceModel.first("id", id)
    res.json(space);
}

module.exports = {
    get_spaces,
    get_space
}