var mysql = require("mysql");

var con = mysql.createConnection({
  host:     "localhost",
  user: "root",
  database: "giant"
});

con.connect(function(err) {
  if (err) {
    console.log(err);
    console.log("Failed to connect to database!");
    return;
  }
  console.log("Successfully connected to database!");
});

module.exports = con;