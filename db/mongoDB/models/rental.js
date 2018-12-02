var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var users = require("../models/users");
var films = require("../models/films");

var rentalsSchema = new Schema({
  status: Boolean,
  users: { type: Schema.Types.ObjectId, ref: "users"},
  films: { type: Schema.Types.ObjectId, ref: "films"}
});

var rental = mongoose.model("rentals", rentalsSchema);

module.exports = rental;
