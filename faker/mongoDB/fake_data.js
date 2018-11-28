var csv = require("fast-csv");
var mongoose = require("mongoose");
var fsex = require("fs-extra");
var db = require("../../db/mongoDB/MongoDB");
var film = require("../../db/mongoDB/models/films");
var user = require("../../db/mongoDB/models/users");
var rental = require("../../db/mongoDB/models/rental");

var importData = function () {
  var stream = fsex.createReadStream("fake_data_film.csv");

  csv.fromStream(stream, {
    headers: [
      "id",
      "name",
      "producer",
      "length"
    ]
  }).on("data", function (data) {
    var newFilm = new film();
    newFilm.id = data["id"];
    newFilm.name = data["name"];
    newFilm.producer = data["producer"];
    newFilm.length = data["length"]
    newFilm.save(function (err, data) {
      if (err) console.log(err)
    })
  })

  // var stream = fsex.createReadStream("fake_data_user.csv");

  // csv.fromStream(stream, {headers : [
  //   "id",
  //   "firstname",
  //   "lastname",
  //   "age",
  //   "email"
  // ]}).on("data", function(data) {
  //   var newUser = new user();
  //   newUser.id = data["id"];
  //   newUser.firstname = data["firstname"];
  //   newUser.lastname = data["lastname"];
  //   newUser.age = data["age"];
  //   newUser.email = data["email"];
  //   newUser.save(function(err, data) {
  //     if (err) console.log(err)
  //   })
  // })
}

//importData();

// film.count(function(err, c) {
//   console.log(c);
// })

fake_rental = function () {
  setTimeout(() => {
    user.find().limit(10).exec(function (err, users) {
      if (err) console.log(err)

      film.find().limit(50).exec(function (err, films) {
        if (err) console.log(err)

        for (i = 0; i < users.length; i++) {
          for (j = 0; j < 5 * (i + 1); j++) {
            var ren = new rental({
              status: true,
              users: new mongoose.Types.ObjectId(users[i]._id),
              films: new mongoose.Types.ObjectId(films[j]._id)
            })

            ren.save();
          }
        }

        console.log("done")
      })
    });
  }, 3000)
}

fake_rental();