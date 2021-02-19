var recipes = require('../recipes.json')['recipes'];

exports.viewRecipe = function(req, res) {
  var id = req.params.id;
  console.log(id);
  var recipe = getRecipe(id);
  res.render('recipe', recipe);
};

function getRecipe(id) {
  if (id == "random") {
    id = Math.floor(Math.random() * projects.length) + 1;
  } else {
    id = parseInt(id);
  }
  var recipe = recipes[id - 1]; // of by one, our first project has index 0
  return recipe;
}