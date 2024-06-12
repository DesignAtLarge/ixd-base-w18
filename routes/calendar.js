/*
 * GET home page.
 */


exports.view = function (req, res) {
  var fs = require('fs');
  var calendar = JSON.parse(fs.readFileSync('public/json/calendar.json', 'utf8'));
  res.render("calendar", {'calendar': calendar});
};
