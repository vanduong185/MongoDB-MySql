var db = require("./db/mongoDB/MongoDB");
var appMongo = require("./app_mongoDB");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/findOne", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeFindOne(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeFindOne = time;
        mysql_data.timeFindOne = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/findAll", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeFindAll(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeFindAll = time;
        mysql_data.timeFindAll = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/updateOne", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeUpdateOne(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeUpdateOne = time;
        mysql_data.timeUpdateOne = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/updateMany", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeUpdateMany(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeUpdateMany = time;
        mysql_data.timeUpdateMany = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/deleteOne", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeDeleteOne(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeDeleteOne = time;
        mysql_data.timeDeleteOne = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/deleteMany", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeDeleteMany(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeDeleteMany = time;
        mysql_data.timeDeleteMany = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/join2", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimePopulateTwoCollection(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeJoin2 = time;
        mysql_data.timeJoin2 = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/join3", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimePopulateThreeCollection(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeJoin3 = time;
        mysql_data.timeJoin3 = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.get("/count", function (req, res) {
    mongo_data = {};
    mysql_data = {};
    appMongo.getTimeCount(function (err, time) {
        if (err) console.log(err)

        mongo_data.timeCount = time;
        mysql_data.timeCount = 3525;

        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data,
            mysql_data: mysql_data
        })
    })
})

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});
