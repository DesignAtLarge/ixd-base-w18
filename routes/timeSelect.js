var moment = require('moment-timezone');
var description = require('../public/json/description.json');

exports.view = function(req, res){
	let curr = moment().tz('America/Los_Angeles');
	res.render('timeSelect', {
		// 'currentTime':( ("0"+now.getHours()).slice(-2) + ":" +("0"+now.getMinutes()).slice(-2)),
		// 'nextTime':( ("0"+oneHourLater.getHours()).slice(-2) + ":" +("0"+oneHourLater.getMinutes()).slice(-2))
		currentTime : curr.format('HH:mm'),
		nextTime : curr.add(moment.duration(1, "hours")).format('HH:mm'),
		description: description.timeSelect
	});
};
