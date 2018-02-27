var jasonDB = require("../data/DB.json");
exports.view = function(req, res){
	//console.log("hey this is before the render, still need to pass the user data down to index.handlebars.", usersDB.users);
  res.render('expense', jasonDB);
};
