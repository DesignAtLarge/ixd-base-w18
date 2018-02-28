var jasonDB = require("../data/DB.json");
exports.view = function(req, res){
  res.render('createChore');
};

exports.edit = function(req, res){
	console.log("we are in the edit function, the request is", req.body);
	var choreID = req.params.id;
	if (choreID == "random") {
		choreID = Math.floor(Math.random() * chores.length) + 1;
	} else {
		choreID = parseInt(choreID);
	}

	let Name = req.body.name;
	console.log("The name is", Name);
	let pts = req.body.pts;
	console.log("The points are", pts);
  	var chore = jasonDB.chores[choreID]; // of by one, our first project has index 0
  	console.log("the chore BEFORE the incremnet is", chore);
  	chore[Name] = pts;
  	console.log("the chore AFTER the incremnet is", chore);
  	jasonDB.chores[choreID] = chore;

  	res.json(chore);
}