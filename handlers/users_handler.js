// =======================
// import constants
// =======================
var users = require("../mocks/jsons/users.json");

// =======================
// import models
// =======================
var User = require("@mock_models/users")

// =======================
// initialize models
// =======================
// TODO: test models
const UserModel = new User(users)

// =======================
// defined handlers
// =======================
const get_users = function (req, res) {
    const users = UserModel.all()
    res.json(users)
}

const get_user = (req, res) => {
    const id = req.params.id;
    const user = UserModel.first("id", id)
    res.json(user);
}

module.exports = {
    get_users,
    get_user
}