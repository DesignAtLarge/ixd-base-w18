const activityUtil = require("../public/js/activities.js");

exports.view = function (req, res) {
    var username = req.cookies.username;
    var week = req.query.week;

    var data = {};

    var activityData = activityUtil.getActivitySummary(username);

    var sum = 0;
    // Force average
    for (var i in activityData) {
        activityData[i].count[week] /= 3600;
        sum += activityData[i].count[week];
    }
    if (sum == 0) {
        data['hasData'] = false;
    } else {
        data['hasData'] = true;
    }

    // Generate suggestions
    var suggestions = [];
    var workHour, familyHour, funHour, schoolHour, workHour, otherHour;
    for(var i in activityData) {
        if(activityData[i].name === 'Work')
            workHour = activityData[i].count[week];
        else if(activityData[i].name === 'Fun')
            funHour = activityData[i].count[week];
        else if(activityData[i].name === 'Family')
            familyHour = activityData[i].count[week];
        else if(activityData[i].name === 'School')
            schoolHour = activityData[i].count[week];
        else if(activityData[i].name === 'Other')
            otherHour = activityData[i].count[week];
    }
    // console.log(workHour, funHour, familyHour, schoolHour, otherHour, sum);
    if (workHour + schoolHour > 12) {
        suggestions.push("Please get less work and/or school time, you deserve a break and get some fun. :)");
    }
    else if (funHour < 4) {
        console.log('Fun Hour:', funHour);
        suggestions.push("Please have more fun time, you deserve it. :)");
    }
    else {
        suggestions.push("Awesome! Everything is good so far. :)");
    }

    // Remove types that have no hours
    data['suggestions'] = suggestions;

    console.log("Suggestions generated:", suggestions);

    res.render('suggestions', data);
}