var statusData = require ('../status-data.json');

exports.view = function(req, res){
  res.render('chat', statusData)
};