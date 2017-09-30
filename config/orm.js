// Import MySQL connection.
var connection = require('../config/connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var ORM = {

	selectAll: function(table, callBack){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			callBack(result);
		});

	},
	insertOne: function(table, columns, values, callBack){
		var queryString = "INSERT INTO " + table + " (" + columns.toString() + ") VALUES (" + printQuestionMarks(values.length) + ")";
		connection.query(queryString,values,function(err,result){
			if(err){
				throw err;
			}
			callBack(result);
		});
	},
	updateOne: function(table, colummValues, condition, callBack){
		var queryString = "UPDATE " + table;

		 queryString += " SET ";
		 queryString += objToSql(colummValues);
		 queryString +=" WHERE ";
		 queryString += condition;
		console.log(queryString);
		connection.query(queryString,function(err, result){
			if(err){
				throw err;
			}
			callBack(result);
		});
	}
}


//Export the orm object
module.exports = ORM;