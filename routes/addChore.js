var jasonDB = require("../data/DB.json");

exports.addChore = function(req, res){

	let chore = {
		name: req.query.name,
		description: req.query.description,
		priority: req.query.priority,
		done: false,
		Karanbir: 0,
		All: 0,
		Youxi: 0,
		Alex: 0,
		Guest: 0
	}

	console.log("BREAK");
	console.log("the Chore to push is ", chore);
	console.log("BREAK");
	
	if(req.query.name){
		if(!init(chore, jasonDB.chores)){
			jasonDB.chores.push(chore);
		};
	}
	res.render('index', jasonDB);
}


function init(obj, arr){
	for (var i = 0; i < arr.length; i++) {
		if(obj.name == arr[i].name){
			return true;
		}
	}
	return false;
}
