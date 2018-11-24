var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalsSchema = new Schema({
  status: Boolean
});

var rental = mongoose.model("rentals", rentalsSchema);

module.exports = rental;