var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api/users.js");

// API Routes
router.use("/api", apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router
