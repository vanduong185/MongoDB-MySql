var db = require("./db/mongoDB/MongoDB");
var appMongo = require("./app_mongoDB");

appMongo.getTimeUpdateMany(function(err, time) {
    console.log(time);
})

