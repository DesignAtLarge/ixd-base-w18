const activityDatabaseFile = "activities.json";
const fs = require("fs");

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*
 * GET home page.
 */

exports.view = function(req, res){
    var username = req.cookies.username;
    var activityDatabase = JSON.parse(fs.readFileSync(activityDatabaseFile, 'utf8'));

    // Retrieve activity count
    var data = {};
    var date = new Date();
    var count = 0;
    var dateStr = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    if(activityDatabase.hasOwnProperty(username)) {
        if(activityDatabase[username].hasOwnProperty(dateStr)) {
            count = activityDatabase[username][dateStr].length;
        }
    }

    data = {
        "noActivity": (count == 0),
        "singleActivity": (count == 1),
        "activitiesCount": count,
        "date": dateStr,
        "day": day[date.getDay()],
    };
    res.render('home', data);
};