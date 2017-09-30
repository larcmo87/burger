var orm = require("../config/orm.js");


var burger = {
	selectAll: function(callBack){
		orm.selectAll("burgers", function(res){
			callBack(res);
		});
	},

	insertOne: function(columns, values, callBack){
		orm.insertOne("burgers",columns, values, function(res){
			callBack(res);
		});
	},
	updateOne: function(colummValues, condition, callBack){
		orm.updateOne("burgers",colummValues, condition, function(res){

			callBack(res);
		});
	}
};

module.exports = burger;
