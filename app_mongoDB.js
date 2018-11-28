var mongoose = require("mongoose");
var Film = require("./db/mongoDB/models/films");
var User = require("./db/mongoDB/models/users");
var Rental = require("./db/mongoDB/models/rental");

exports.getTimeFindAll = function (callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Film.find(function (err, Films) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime)
        });
    }, 3000);
}

exports.getTimeFindOne = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Film.find({name: "Vqaqe Qbozm"} ,function (err, result) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime)
        });
    }, 3000);
}

exports.createRental = function() {
    setTimeout(() => {
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
                firstname: "Duong Nguyen",
                lastname: "Van",
                age: 18,
                email: "vanduo@asd.co"
            })

            user.save(function(err) {
                if (err) console.log(err);

                var rental = new Rental({
                    status: true,
                    users: user._id,
                    films: film._id
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

exports.getTimePopulateTwoCollection = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Rental.find().populate("users").exec(function(err, rentals) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime);
        })
    }, 3000)
}

exports.getTimePopulateThreeCollection = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Rental.find().populate("users").populate("films").exec(function(err, rentals) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime);
        })
    }, 3000)
    
}

exports.getTimeUpdateOne = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        User.updateOne({firstname: "Duong Nguyen"}, {firstname: "Duongdz"}, function(err) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime);
        })
    })
}

exports.getTimeUpdateMany = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        User.updateMany({age: {$lt: 18}}, {firstname: "em chua 18"}, function(err) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime);
        })
    })
}

exports.getTimeDeleteOne = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        User.deleteOne({firstname: "Duongdz"}, function(err, c) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime);
        })
    })
}

exports.getTimeCount = function(callback) {
    setTimeout(() => {
        beginTime = new Date().getTime();
        Rental.count(function(err, c) {
            endTime = new Date().getTime();
            callback(err, endTime - beginTime);
        })
    })
}
