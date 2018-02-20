var router = require('express').Router()
var usersController = require('../../controllers/usersController')
// var dummyData = require('../../models/dummyData')


// Matches with "/api/users"
router.route('/users')
.get(usersController.findAll)
.post(usersController.create)

router.route('/users/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)


module.exports = router
