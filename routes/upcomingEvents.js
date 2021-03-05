/*
 * GET home page.
 */

var calendar = require("../public/json/calendar.json");

exports.upload = function(req, res){
  calendar.saved_events.push(newSavedEvent);
  };