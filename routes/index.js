var path = require("path")
var router = require("express").Router()
var apiRoutes = require("./api/users")
var db = require('../models')

// API Routes
router.use("/api", apiRoutes)
// router.use('/api/users', (req, res) => {
//   db.Users
//     .find({})
//     .then( data => {
//       console.log('data', data);
//       res.json(data)
//     } )
//     .catch(err => res.status(422).json(err))
//
// })

router.use('/', (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

module.exports = router
