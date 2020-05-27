var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url).then((db) => {
  console.log("database connect by adhish");
  var dbo = db.db("mydb");

  dbo.createCollection("customers").then(() => {
    let myobj = { name: "Adhish" };
    console.log("collection created");
    dbo.collection("customers").insertOne(myobj);
    dbo
      .collection("customers")
      .findOne({})
      .then((results) => {
        console.log(results);
      });

    var newvalues = { $set: { name: "Mickey" } };
    dbo.collection("customers").updateOne({}, newvalues);

    var myquery = { name: "Mickey" };
    dbo.collection("customers").deleteOne(myquery);
  });
  // db.close();
});
