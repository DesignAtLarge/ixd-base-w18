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
	let arr = order(jasonDB.chores)
	jasonDB.chores = arr;
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

function order(arr){
	console.log("we are in teh order function and the arr is", arr);
	let arrToReturn = []
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].done){
			arrToReturn.push(arr[i]);
		}else{
			arrToReturn.unshift(arr[i]);
		}
	}
	console.log("THis is at the end of order function and the array to return is..", arrToReturn)
	return arrToReturn;
}
