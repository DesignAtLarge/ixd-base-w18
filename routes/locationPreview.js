var key = require("../key.json");
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('locationPreview', key); 
};
