var jasonDB = require("../data/DB.json");
exports.view = function(req, res){
	//console.log("hey this is before the render, still need to pass the user data down to index.handlebars.", usersDB.users);
  jasonDB["viewAlt"] = false;
  res.render('index', jasonDB);
};

exports.viewAlt = function (req, res){
	jasonDB["viewAlt"] = true;
	res.render('index', jasonDB);
};