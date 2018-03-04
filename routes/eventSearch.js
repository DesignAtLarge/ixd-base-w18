
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  //var id = req.params.id;
  //var event = data.events[id % data.events.length];
  data["viewAlt"] = false;
  res.render('eventSearch', data);
};
exports.viewAlt = function(req, res){
    // var events = data.events;
    // console.log(events);
    data["viewAlt"] = true;
    res.render('eventSearch', data);
}