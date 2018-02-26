
/*
 * GET home page.
 */

var getEvents = require('../public/json/userHistory');

exports.view = function(req, res){
	//console.log(getEvents.history)
  res.render('recentHistory',{"history":getEvents.history[0]});
};