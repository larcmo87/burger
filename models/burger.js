var orm = require("../config/orm.js");


//BURGER MODEL
var burger = {
	//SELECT FUCTION TO RETURN ALL DATA
	selectAll: function(callBack){
		orm.selectAll("burgers", function(res){
			callBack(res);
		});
	},

	//INSERT FUNCTION TO INSURT NEW DATA
	insertOne: function(columns, values, callBack){
		orm.insertOne("burgers",columns, values, function(res){
			callBack(res);
		});
	},

	//UPDATE FUNCTION TO UPDATE DATA
	updateOne: function(colummValues, condition, callBack){
		orm.updateOne("burgers",colummValues, condition, function(res){

			callBack(res);
		});
	}
};

module.exports = burger;
