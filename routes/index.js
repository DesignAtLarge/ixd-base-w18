var club = require("../public/json/club.json");

exports.view = function(req, res){
  res.render('index', club);
};
