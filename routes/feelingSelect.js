var tagnames = require('../public/json/tags.json');
var description = require('../public/json/description.json');

exports.view = function(req, res){
	tagnames["description"] = description.feelingSelect;
	console.log(tagnames);
  res.render('feelingSelect',tagnames);
};
