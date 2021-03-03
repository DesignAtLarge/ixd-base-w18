/*
 * GET home page.
 */
var event = require("../public/json/calendar.json");

exports.view = function (req, res) {
  res.render("calendar", event);
};
