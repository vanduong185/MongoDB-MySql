var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("giant");
  //Find the first document in the customers collection:
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});