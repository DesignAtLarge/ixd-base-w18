
/*
 * GET home page.
 */

var moment = require('moment-timezone');

exports.view = function(req, res){
	let curr = moment().tz('America/Los_Angeles');
	res.render('eventCreation', {
		// 'currentTime':( ("0"+now.getHours()).slice(-2) + ":" +("0"+now.getMinutes()).slice(-2)),
		// 'nextTime':( ("0"+oneHourLater.getHours()).slice(-2) + ":" +("0"+oneHourLater.getMinutes()).slice(-2))
		currentTime : ("0" + curr.hours()).slice(-2) + ":" + curr.minutes(),
		nextTime : ("0" + curr.add(moment.duration(1, "hours")).hours()).slice(-2) + ":" + curr.minutes()
	});
};

