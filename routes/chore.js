var jasonDB = require("../data/DB.json");
exports.view = function(req, res){
  res.render('createChore', jasonDB);
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
  	


  	if(!chore.done){
  		chore.done = true;
  	} 
  	console.log("the chore AFTER the incremnet is", chore);
  	jasonDB.chores[choreID] = chore;

  	let id = 0;
	if(Name == 'Karanbir'){
		id = 0;
	}else if( Name == 'All'){
		id = 1;
	}else if (Name == 'Youxi'){
		id = 2;
	} 
	else if (Name == 'Alex'){
		id = 3
	}else {
		id = 4;
	}

	if(id < 4){
		chore[Name] = pts;
	}else{
		chore.Guest = pts;
	}
  	

	let mate = jasonDB.housemates[id];
	mate.chorePts = pts;
	jasonDB.housemates[id] = mate;
	console.log("the replecement mate is", mate);
  	res.json(chore);
}

exports.done = function (req, res){
	let choreID = req.params.id; 
	let chore = jasonDB.chores[choreID];
	if(chore.done){
  		chore.done = false;
  	}
  	console.log("the chore in DONE is", chore);
  	jasonDB.chores[choreID] = chore;
}