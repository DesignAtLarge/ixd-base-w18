
/*
 * GET home page.
 */
 var background = require('../public/json/background.json');

exports.view = function(req, res){
  res.render('index', background);
};