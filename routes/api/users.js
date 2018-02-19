const router = require("express").Router();
const resourceController = require("../../controllers/usersController");

// Matches with "/api/resources"
router.route("/resources")
  .get(resourceController.findAll)
  .post(resourceController.create);

module.exports = router
