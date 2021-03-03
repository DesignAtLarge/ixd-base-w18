var upcoming = require("../public/json/upcoming.json");


exports.view = function(req, res){
    res.render('event', upcoming);
  };