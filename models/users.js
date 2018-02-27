var mongoose = require('mongoose')

var Schema = mongoose.Schema

var usersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true }
});

var Users = mongoose.model('Users', usersSchema)

module.exports = Users
