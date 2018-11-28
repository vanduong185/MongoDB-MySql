var mongoose = require("mongoose");
var db = require("./db/mongoDB/MongoDB");
var Film = require("./db/mongoDB/models/films");
var User = require("./db/mongoDB/models/users");
var Rental = require("./db/mongoDB/models/rental");


getAllFilm_time = function () {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Film.find(function (err, Films) {
            if (err) return console.error(err);
            endTime = new Date().getTime();
            return endTime - beginTime
        });
    }, 3000);
}


getAFilm_time = function() {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Film.find({name: "Vqaqe Qbozm"} ,function (err, result) {
            if (err) return console.error(err);
            endTime = new Date().getTime();
            return endTime - beginTime
        });
    }, 3000);
}

createRental = function() {
    setTimeout(() => {
        // Film.find({name: "Vqaqe Qbozm"}, function(err, film) {
        //     if (err) return console.error(err);
        //     console.log(film);
        //     User.find({firstname: "Se Sge"}, function(err, user) {
        //         if (err) return console.error(err);
        //         console.log(user);

        //         rental = new Rental({
        //             status: true,
        //             user: user._id,
        //             film: film._id
        //         });

        //         console.log(rental);
        //         rental.save(function (err) {
        //             if (err) console.log(err)
        //         })
        //     })
        // })

        var film = new Film({
            _id: new mongoose.Types.ObjectId(),
            name: "Duong",
            producer: "tao",
            length: 150
        })

        film.save(function(err) {
            if (err) console.log(err);

            var user = new User({
                _id: new mongoose.Types.ObjectId(),
                fisrtname: "Duong Nguyen",
                lastname: "Van",
                age: 18,
                email: "vanduo@asd.co"
            })

            user.save(function(err) {
                if (err) console.log(err);

                var rental = new Rental({
                    status: true,
                    user: user._id,
                    film: film._id
                })

                rental.save(function(err) {
                    if (err) console.log(err)
                    else {
                        console.log("done");
                    }
                })
            })
        })
    }, 3000)
}

