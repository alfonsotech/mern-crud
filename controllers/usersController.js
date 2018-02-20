var db = require('../models')

module.exports = {
  //Find one
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  //Find All
  findAll: function(req, res) {
    db.User
      .find({})
      .then( data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  //Create One
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
  },
  //Update a single record
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  //Delete a record
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
}
