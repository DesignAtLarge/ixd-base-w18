/*
 * GET home page.
 */

var data = require ('../actLog.json');

exports.view = function(request, response){
  console.log(data);
  response.render('index', data);

};


