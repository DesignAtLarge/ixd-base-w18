var jasonDB = require("../data/DB.json");
exports.view = function(req, res){
	//console.log("hey this is before the render, still need to pass the user data down to index.handlebars.", usersDB.users);
  jasonDB["viewAlt"] = false;
  let arr = order(jasonDB.chores)
	jasonDB.chores = arr;
  res.render('index', jasonDB);
};

exports.viewAlt = function (req, res){
	jasonDB["viewAlt"] = true;
	res.render('index', jasonDB);
};

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