var mongoose = require("mongoose");
var Film = require("./db/mongoDB/models/films");
var User = require("./db/mongoDB/models/users");
var Rental = require("./db/mongoDB/models/rental");

exports.getTimeFindAll = async function (callback) {
    var res = await Film.find().explain('executionStats');
    callback(res[0].executionStats.executionTimeMillis);
    //console.log(res[0].executionStats.executionTimeMillis);
}

exports.getTimeFindOne = async function(callback) {
    var res = await Film.find({name: "Xlhmdrio Dtdpbds"}).explain('executionStats');
    callback(res[0].executionStats.executionTimeMillis);
}

exports.getTimePopulateTwoCollection = async function(callback) {
    var res = await Rental.find().populate("users").explain('executionStats');
    callback(res[0].executionStats.executionTimeMillis);
}

exports.getTimePopulateThreeCollection = async function(callback) {
    var res = await Rental.find().populate("users").populate("films").explain('executionStats');
    callback(res[0].executionStats.executionTimeMillis);
}

exports.getTimeUpdateOne = async function(callback) {
    beginTime = new Date().getTime();
    var res = await Film.updateOne({id: 10000}, {name: "duongdeptrai"});
    endTime = new Date().getTime();
    callback(endTime - beginTime);
}

exports.getTimeUpdateMany = async function(callback) {
    beginTime = new Date().getTime();
    var res = await User.updateMany({age: {$lt: 18}}, {firstname: "em chua 18"});
    endTime = new Date().getTime();
    callback(endTime - beginTime);
}

exports.getTimeDeleteOne = async function(callback) {
    beginTime = new Date().getTime();
    var res = await User.deleteOne({firstname: "Jyehpx Vjhum"});
    endTime = new Date().getTime();
    callback(endTime - beginTime);
}

exports.getTimeDeleteMany = async function(callback) {
    beginTime = new Date().getTime();
    var res = await User.deleteMany({age: {$lt: 18}});
    endTime = new Date().getTime();
    callback(endTime - beginTime);
}

exports.getTimeCount = async function(callback) {
    beginTime = new Date().getTime();
    var res = await Film.count();
    endTime = new Date().getTime();
    callback(endTime - beginTime);
}

// exports.getTimeCount = async function(callback) {
//     Film.find().count
// }
