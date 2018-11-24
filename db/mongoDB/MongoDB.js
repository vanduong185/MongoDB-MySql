// var mysql = require("mysql");

// var con = mysql.createConnection({
//   host:     "localhost",
//   user:     "root",
//   password: "12345678",
//   database: "giant_db"
// });

// con.connect(function(err) {
//   if (err) {
//     console.log(err);
//     console.log("Failed to connect to database!");
//     return;
//   }
//   console.log("Successfully connected to database!");
// });

// module.exports = con;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giant');
var db = mongoose.connection;

db.on('error', function(msg){
    console.log("db connection failed");
});

db.once('open', function(){
    console.log("db connected successfully");
});

module.exports = db;
