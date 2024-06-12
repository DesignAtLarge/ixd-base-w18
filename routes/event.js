var upcoming = require("../public/json/upcoming.json");
var calendar = require("../public/json/calendar.json");

upcoming.string = JSON.stringify(upcoming);
calendar = JSON.stringify(calendar);

exports.view = function(req, res){

  


  res.render('event', {
    'upcoming' : upcoming, 'calendar' : calendar
  });
  };