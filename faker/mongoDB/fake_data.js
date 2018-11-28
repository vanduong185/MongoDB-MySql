var csv = require("fast-csv");
var mongoose = require("mongoose");
var fsex = require("fs-extra");
var db = require("../../db/mongoDB/MongoDB");
var film = require("../../db/mongoDB/models/films");
var user = require("../../db/mongoDB/models/users");

var importData = function () {
  // var stream = fsex.createReadStream("fake_data_film.csv");

  // csv.fromStream(stream, {headers : [
  //   "id",
  //   "name",
  //   "producer",
  //   "length"
  // ]}).on("data", function(data) {
  //   var newFilm = new film();
  //   newFilm.id = data["id"];
  //   newFilm.name = data["name"];
  //   newFilm.producer = data["producer"];
  //   newFilm.length = data["length"]
  //   newFilm.save(function(err, data) {
  //     if (err) console.log(err)
  //   })
  // })

  var stream = fsex.createReadStream("fake_data_user.csv");

  csv.fromStream(stream, {headers : [
    "id",
    "firstname",
    "lastname",
    "age",
    "email"
  ]}).on("data", function(data) {
    var newUser = new user();
    newUser.id = data["id"];
    newUser.firstname = data["firstname"];
    newUser.lastname = data["lastname"];
    newUser.age = data["age"];
    newUser.email = data["email"];
    newUser.save(function(err, data) {
      if (err) console.log(err)
    })
  })
}

importData();

// film.count(function(err, c) {
//   console.log(c);
// })