var jasonDB = require("../data/DB.json");

exports.signOut = function(req, res){
	jasonDB.users = [];	
	res.render("login");
}
