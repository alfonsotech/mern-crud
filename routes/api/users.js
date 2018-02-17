var router = require('express').Router()
var userController = require('../../controllers/usersController')

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)
