var express = require('express');
var router = express.Router();
//const ADODB = require('node-adodb');
//const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=./Database/Employee_Data.mdb;');
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  var jsonResponse={
    "items": [
      { name: 'Dilip', surname: 'Chavan', birthYear: 1987, birthCity: 63,skills:"Drawing,painting",Department:"IT" },
      {
        name: 'Aruna',
        surname: 'Chavan',
        birthYear: 1968,
        birthCity: 34,skills:"Drawing,painting",Department:"IT"
      },
      { name: 'Shashank', surname: 'Satpute', birthYear: 1991, birthCity: 45,skills:"Drawing,writing",Department:"welder" },
      { name: 'Gauri', surname: 'Taware', birthYear: 2014, birthCity: 45,skills:"Drawing,Sitting",Department:"painter" },
      { name: 'Prajakta', surname: 'Taware', birthYear: 1989, birthCity: 43,skills:"Drawing,timepass",Department:"Admin" },
      { name: 'Chandrakant', surname: 'Taware', birthYear: 1987, birthCity: 89,skills:"Drawing,cooking",Department:"not" },
      { name: 'Rugved', surname: 'Taware', birthYear: 2018, birthCity: 6873,skills:"Drawing,playing",Department:"field" },
      { name: 'Shruti', surname: 'Satpute', birthYear: 1992, birthCity: 89,skills:"Drawing,running",Department:"ok" },
    ] 
  };

 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Shashank:shashank1@ds139896.mlab.com:39896/heroku_vc2qnm80";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_vc2qnm80");
  dbo.collection("Velvet_Pencil_Raw_Material").find({}).toArray(function(err, result) {
    if (err) throw err;
    var jsonResponse={
      "items": result          
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
