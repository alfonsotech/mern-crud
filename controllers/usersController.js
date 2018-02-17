var db = require('../models')

module.exports = {
  findAll: function(req, res) {
    db.User
      .find({})
      .then( data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    console.log('req.body', req.body);
    var user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }
    db.User
      .create(user)
      .then( data => res.json(data))
      .catch(err => res.status(422).json(err))
  }
}
