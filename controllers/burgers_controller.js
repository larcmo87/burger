//REQUIRE EPRESS PACKAGE
var express = require("express");

//CREATE AN EXPRESS ROUTE
var router = express.Router();

//REQUIRE THE BURGRES.JS 
var burger = require('../models/burger.js');

//GET METHOD
router.get("/",function(req,res){
  //GET ALL THE DATA FROM THE DATABASE TABLE 
	burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    //RENDER ALL RETURNED DATA TO THE INDEX PAGE
    res.render("index", hbsObject);

  });
});

//POST (PUT) METHOD
router.put("/:id", function(req, res) {
  //GET THE PARAM ID VALUE AND APPEND TO STRING( USED IN UPDATE SQL QUERY IN ORM.JS FILE)
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
 //UPDATE THE RECORD
  burger.updateOne({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

router.post("/", function(req, res) {
  //CHECK IF AN VALUE FOR A NEW BURGER TYPE HAS BEEN ENTERED
  if(req.body.burger_type !== "") {
      console.log("burger type = " + req.body.burger_type);
    //INSERT THE BURGER INTO THE DATABASE TABLE
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_type
    ], function() {
      //REDIRCT TO THE INDEX PAGE
      res.redirect("/");
    });
  }else{
    //IF A BLANK VALUE IS ENTERED THEN JUST REDIRECT TO THE INDEX PAGE
    res.redirect("/");
  }
});


module.exports = router;