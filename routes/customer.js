var express = require('express');
var router = express.Router();
//const ADODB = require('node-adodb');
//const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=./Database/Employee_Data.mdb;');
 
/* GET users listing. */
router.get('/', function(req, res, next) {
 
 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Shashank:shashank1@ds139896.mlab.com:39896/heroku_vc2qnm80";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_vc2qnm80");
  dbo.collection("CustomerData").find({}).toArray(function(err, result) {
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

router.get('/:id', function(req, res, next) {
 
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
 });

 router.get('/:id/:pencil/:gum/:color/:stand/:date', function(req, res, next) {
 
  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://Shashank:shashank1@ds139896.mlab.com:39896/heroku_vc2qnm80";
 var id=req.params.id;
 var reqPencil=req.params.pencil;
 var reqGum=req.params.gum;
 var reqColor=req.params.color;
 var reqStand=req.params.stand;
var dateReq=req.params.date;
 console.log("*************************ID",req)
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("heroku_vc2qnm80");

   var myquery = { id: "1" };

   dbo.collection("Velvet_Pencil_Raw_Material").find({id: "1"}).toArray(function(err, result) {
    if (err) throw err;
    var data=result[0];
    var pencil=data.pencil;
    var gum=data.gum;
    var color=data.color;
    var stand=data.stand;

    var Updatedpencil=Number(pencil)-Number(reqPencil);
    
    var UpdatedGum=Number(gum)-Number(reqGum);
    
    var UpdatedColor=Number(color)-Number(reqColor);
    
    var UpdatedStand=Number(stand)-Number(reqStand);

    var newvalues = { $set: {pencil: Updatedpencil,gum:UpdatedGum,color:UpdatedColor,stand:UpdatedStand } };
    dbo.collection("Velvet_Pencil_Raw_Material").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      //db.close();
      console.log(result);
      
      db.close();
    });
   
    let objectMaterial={
      "pencil":reqPencil,
      "gum":reqGum,
      "color":reqColor,
      "stand":reqStand,
      "customer_id":id,
      "date":dateReq
    }
    dbo.collection("Material_Purchased").insertOne(objectMaterial, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    res.send({"true":true});
  });



  
 });
 });


module.exports = router;
