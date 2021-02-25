var recipes = require('../recipes.json')['recipes'];

exports.viewRecipe = function(req, res) {
  var name = req.params.name;
  console.log(name);
  var recipe = getRecipe(name);
  res.render('recipe', recipe);
};

function getRecipe(name) {
  var i = 0;
  var target = recipes[i];
  while (target.name !== name) {
    i++;
    target = recipes[i];
  }
  return target;
}