const activityUtil = require("../public/js/activities.js");
const userFile = "users.json";
const fs = require('fs');

const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*
 * GET report page.
 */

exports.view = function(req, res){
    var username = req.cookies.username;

    var data = {};
    
    var users = JSON.parse(fs.readFileSync(userFile, 'utf8'));
    var startDay = users[username]['settings']['startDay'];

    data['data'] = activityUtil.getActivitySummary(username);
    data['startDay'] = dayName[startDay];

    console.log("Data gathered:", data['data']);

    res.render('report', data);
};