var recipes = require('../recipes.json');

exports.view = function(req, res) {
  res.render('index', recipes);
};

exports.viewRecipe = function(req, res) {
  var name = req.params.name;
  console.log(name);
  var recipe = getRecipe(name);
  res.render('recipe', recipe);
};

function getRecipe(name) {
  var i = 0;
  var target = recipes['recipes'][i];
  while (target.name !== name) {
    i++;
    target = recipes['recipes'][i];
  }
  return target;
}