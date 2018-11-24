var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  id: {type: Number},
  firstname: String,
  lastname: String,
  age: Number,
  email: String
});

var user = mongoose.model("users", usersSchema);

module.exports = user;
