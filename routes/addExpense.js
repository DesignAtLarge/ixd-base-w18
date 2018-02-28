var jasonDB = require("../data/DB.json");

exports.addExpense = function(req, res){
	let expense = {
		name: req.query.name,
		description: req.query.description,
		imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Double-barred_dollar_sign.svg/2000px-Double-barred_dollar_sign.svg.png',
		inventory: req.query.inventory
	}

	console.log("BREAK");
	console.log("the expense to push is ", expense);
	console.log("BREAK");
	if(req.query.name){
	jasonDB.expenses.push(expense);
	}
	res.render('expense', jasonDB);
}
