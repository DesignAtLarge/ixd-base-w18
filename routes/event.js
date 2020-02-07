
/*
 * GET event list page.
 */
event = require('../mock-event.json');
exports.view = function(req, res){
  res.render('event', event);
};