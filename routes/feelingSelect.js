var tagnames = require('../public/json/tags.json');

exports.view = function(req, res){
	console.log(tagnames);
  res.render('feelingSelect',tagnames);
};
