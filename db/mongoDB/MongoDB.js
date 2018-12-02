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
