var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmsSchema = new Schema({
  id: {type: Number},
  name: String,
  producer: String,
  length: {type: Number, min: 0, max: 350}
});

var Film = mongoose.model("films", filmsSchema);

module.exports = Film;