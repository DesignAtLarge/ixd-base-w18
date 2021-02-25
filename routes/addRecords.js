var records = require("../records.json");

exports.addData = function(request, response) {    
	// Your code goes here
	var recordData = {
		"date": request.query.date,
		"title": request.query.title,
		"subject": request.query.subject,
		"time": request.query.time,
		"scale": request.query.scale
	};
	records.records.push(recordData);
	console.log(records);
	console.log(records["data"]);
	response.render("record", records);
}