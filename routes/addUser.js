var jasonDB = require("../data/DB.json");

exports.addUser = function(req, res){	
	console.log("the req", req.body);

	let user = {
		name: req.body.name,
		url: req.body.url,
		first: req.body.first,
		expense: 0.0,
		chorePts: 0
	}

	console.log("BREAK");
	console.log("the user to push is ", user);
	console.log("BREAK");

	if(req.body.name){
		if(req.body.name == 'Karanbir' || req.body.name == 'Alex' || req.body.name == 'Youxi' || req.body.name == 'All'){
			jasonDB.users.push(user);	
		}else{
			jasonDB.users.push(user);	
			jasonDB.housemates.push(user);
		}
		
	}
	res.render("index", jasonDB);

}
