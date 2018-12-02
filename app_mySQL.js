var db = require("./db/mysql/mysql");

exports.getTimeFindAll = async function (callback) {
    query_str = "SELECT * FROM users";
    beginTime = new Date().getTime();
    var res = await db.query(query_str);
    endTime = new Date().getTime();
    callback(endTime - beginTime)
}

exports.getTimeFindOne = function (callback) {
    query_str = "SELECT * FROM users WHERE id = 1";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeUpdateOne = function (callback) {
    query_str = "UPDATE users SET firstname='Duong' WHERE id = 1";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeUpdateMany = function (callback) {
    query_str = "UPDATE users SET firstname='Duong' WHERE id > 1 and id < 1000";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeDeleteOne = function (callback) {
    query_str = "DELETE FROM users WHERE id = 1";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeDeleteMany = function (callback) {
    query_str = "DELETE users WHERE id > 1 and id < 1000";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeJoin2 = function (callback) {
    query_str = "SELECT u.*, r.* FROM users u JOIN rental r ON u.id = r.user_id";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeJoin3 = function (callback) {
    query_str = "SELECT u.*, r.*, f.* FROM users u JOIN rental r ON u.id = r.user_id JOIN films f ON r.film_id = f.id";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

exports.getTimeCount = function (callback) {
    query_str = "SELECT COUNT(*) FROM users";
    beginTime = new Date().getTime();
    db.query(query_str, function(err, user) {
        endTime = new Date().getTime();
        callback(err, endTime - beginTime)
    })
}

