var dbM = require("./db/mongoDB/MongoDB");
var dbS = require("./db/mysql/mysql");
var appMysql = require("./app_mySQL");
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

app.get("/mongo/findOne", function (req, res) {
    mongo_data = {};
    appMongo.getTimeFindOne(function (time) {
        mongo_data.timeFindOne = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/findAll", function (req, res) {
    mongo_data = {};
    appMongo.getTimeFindAll(function (time) {
        mongo_data.timeFindAll = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/updateOne", function (req, res) {
    mongo_data = {};
    appMongo.getTimeUpdateOne(function (time) {
        mongo_data.timeUpdateOne = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/updateMany", function (req, res) {
    mongo_data = {};
    appMongo.getTimeUpdateMany(function (time) {
        mongo_data.timeUpdateMany = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/deleteOne", function (req, res) {
    mongo_data = {};
    appMongo.getTimeDeleteOne(function (time) {
        mongo_data.timeDeleteOne = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/deleteMany", function (req, res) {
    mongo_data = {};
    appMongo.getTimeDeleteMany(function (time) {
        mongo_data.timeDeleteMany = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/join2", function (req, res) {
    mongo_data = {};
    appMongo.getTimePopulateTwoCollection(function (time) {
        mongo_data.timeJoin2 = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/join3", function (req, res) {
    mongo_data = {};
    appMongo.getTimePopulateThreeCollection(function (time) {
        mongo_data.timeJoin3 = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mongo/count", function (req, res) {
    mongo_data = {};
    appMongo.getTimeCount(function (time) {
        mongo_data.timeCount = time;
        res.status(200).json({
            message: "OK",
            mongo_data: mongo_data
        })
    })
})

app.get("/mysql/findOne", function (req, res) {
    mysql_data = {};
    appMysql.getTimeFindOne(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeFindOne = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/findAll", function (req, res) {
    mysql_data = {};
    appMysql.getTimeFindAll(function (time) {
        mysql_data.timeFindAll = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/updateOne", function (req, res) {
    mysql_data = {};
    appMysql.getTimeUpdateOne(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeUpdateOne = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/updateMany", function (req, res) {
    mysql_data = {};
    appMysql.getTimeUpdateMany(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeUpdateMany = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/deleteOne", function (req, res) {
    mysql_data = {};
    appMysql.getTimeDeleteOne(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeDeleteOne = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/deleteMany", function (req, res) {
    mysql_data = {};
    appMysql.getTimeDeleteMany(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeDeleteMany = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/join2", function (req, res) {
    mysql_data = {};
    appMysql.getTimeJoin2(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeJoin2 = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/join3", function (req, res) {
    mysql_data = {};
    appMysql.getTimeJoin3(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeJoin3 = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.get("/mysql/count", function (req, res) {
    mysql_data = {};
    appMysql.getTimeCount(function (err, time) {
        if (err) console.log(err)
        mysql_data.timeCount = time;
        res.status(200).json({
            message: "OK",
            mysql_data: mysql_data
        })
    })
})

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});
