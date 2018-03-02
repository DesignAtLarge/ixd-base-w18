var jasonDB = require("../data/DB.json");


exports.view = function(req, res){
  res.render('createExpense', jasonDB);
};


exports.edit = function(req, res){
	console.log("we are in the edit function, the request is", req.body);
	

	let Name = req.body.name;
	console.log("The name is", Name);
	let money = req.body.money;
	console.log("The cost is", money);
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
  	var mate = jasonDB.housemates[id]; // of by one, our first project has index 0
  	console.log("the mate BEFORE the incremnet is", mate);
  	let tempCost = parseFloat(mate.expense);
  	console.log("the tempCost is ", tempCost);
  	let floatTotal = tempCost + parseFloat(money);
  	mate.expense = floatTotal;
  	console.log("the mate AFTER the incremnet is", mate);
  	jasonDB.housemates[id] = mate;
  	res.json(mate);


	let index = req.params.id;
	jasonDB.expenses.splice(index,1)
	
	if(jasonDB.expenses.length == 0){
		console.log("this is empty");
	}else{
		console.log("the expense array is", jasonDB.expenses)
	}
};

exports.delete = function (req, res){
	let index = req.params.id;
	jasonDB.expenses.splice(index,1)
	
	if(jasonDB.expenses.length == 0){
		console.log("this is empty");
	}else{
		console.log("the expense array is", jasonDB.expenses)
	}
}
