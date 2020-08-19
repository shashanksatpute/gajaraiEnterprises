var express = require('express');
var router = express.Router();
//const ADODB = require('node-adodb');
//const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=./Database/Employee_Data.mdb;');
 
/* GET users listing. */
router.get('/', function(req, res, next) {
 
 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Shashank:shashank1@ds139896.mlab.com:39896/heroku_vc2qnm80";
var id=req.params.id;

console.log("*************************ID",req)
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_vc2qnm80");
  dbo.collection("Material_Purchased").find({"customer_id":id}).toArray(function(err, result) {
    if (err) throw err;
    var jsonResponse={
      "records": result          
    }
    console.log(result);
    res.send(jsonResponse);
    db.close();
  });
});
 /* connection
  .query('SELECT * FROM Employee_Details')
  .then(data => {
    var jsonResponse={
      "items": data          
    }
    console.log(data, null, 2));
   
  })
  .catch(error => {
    console.error(error);
  });*/

 // res.send(jsonResponse);
});

module.exports = router;
