var recipes = require('../recipes.json');

exports.view = function(req, res) {
  res.render('index', recipes);
};