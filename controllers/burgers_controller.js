
var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/",function(req,res){
	burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);

  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
 
  burger.updateOne({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

router.post("/", function(req, res) {
  console.log("burger type = " + req.body.burger_type);
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_type
  ], function() {
    res.redirect("/");
  });
});


module.exports = router;