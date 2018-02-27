var jasonDB = require("../data/DB.json");

exports.addUser = function(req, res){	
	console.log("the req", req.body);

	let user = {
		name: req.body.name,
		url: req.body.url,
		first: req.body.first,
		expense: 0.0
	}

	console.log("BREAK");
	console.log("the user to push is ", user);
	console.log("BREAK");

	if(req.body.name){
		jasonDB.users.push(user);
	}
	res.render("index", jasonDB);

}
