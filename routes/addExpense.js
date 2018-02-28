var jasonDB = require("../data/DB.json");

exports.addExpense = function(req, res){
	let expense = {
		name: req.query.name,
		description: req.query.description,
		inventory: req.query.inventory
	}

	console.log("BREAK");
	console.log("the expense to push is ", expense);
	console.log("BREAK");
	if(req.query.name){
	jasonDB.expenses.push(expense);	
	}
	res.render('expenseHomepage', jasonDB);
}
