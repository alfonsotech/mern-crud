var db = require('../models')
console.log('db.Users >>>>>>', db.Users)

module.exports = {
  //Find one
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  //Find All
  findAll: function(req, res) {
    console.log('inside findAll func 1');
    db.Users
      .find({})
      .then( data => {
        console.log('data fron inside findAll func', data);
        res.json(data)
      })
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
    db.Users
      .create(user)
      .then( data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  //Update a single record
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  //Delete a record
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
}
