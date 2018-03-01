var jasonDB = require("../data/DB.json");

exports.addChore = function(req, res){

	let chore = {
		name: req.query.name,
		description: req.query.description,
		imageURL: 'http://4.bp.blogspot.com/-gcFUfBFmSKU/ThWcm3ua6zI/AAAAAAAAAHM/Rgj6B4i0R-8/s1600/laundry.gif',
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
	jasonDB.chores.push(chore);
	}
	
	res.render('index', jasonDB);
}
