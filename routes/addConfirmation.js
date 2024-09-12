'use strict';

const activityDatabaseFile = 'activities.json';
const activityTypesFile = 'activityTypes.json';
const fs = require('fs');

exports.view = function(request, res){
    var username = request.cookies.username;
    var activityName = request.query.activityName;
    var type = request.query.type;
	var startTime = request.query.startTime;
    var endTime = request.query.endTime;
	console.log(activityName, type, startTime, endTime);

    var newData = {
        "error": false,
        "activityName": activityName,
        "type": type,
        "startTime": startTime,
        "endTime": endTime,
    };

    // Write to activities file
    var response = recordActivity(username, activityName, type, startTime, endTime);
    if(response === '') {
        res.render('addConfirmation', newData);
    } else {
        res.render('addConfirmation', {
            "error": true,
            "reason": response,
        });
    }
};

function recordActivity(username, activityName, type, startTime, endTime) {
    // Sanity checks

    // Activity name can't be empty
    if(activityName.trim() === '') {
        return 'Activity name can\'t be empty';
    }

    // type must be defined
    var activityTypes = JSON.parse(fs.readFileSync(activityTypesFile, 'utf8'));
    var types = activityTypes["types"];
    var validType = false;
    for(var i = 0; i < types.length; i++) {
        if(types[i]["name"] === type) {
            validType = true;
            break;
        }
    }
    if(!validType) {
        return 'Activity type not valid';
    }

    // start & end time check
    if(startTime === '' && endTime === '') {
        return 'Time can\'t be empty';
    } else if(startTime === endTime) {
        return 'Start and end time are the same';
    }

    var parts = startTime.split(/[: ]/);
    if(parts.length != 3) return 'Start time ill-formatted'
    var startHour = parseInt(parts[0]);
    var startMin = parseInt(parts[1]);
    var startDay = parts[2];
    parts = endTime.split(/[: ]/);
    if(parts.length != 3) return 'End time ill-formatted'
    var endHour = parseInt(parts[0]);
    var endMin = parseInt(parts[1]);
    var endDay = parts[2];

    // Calculate duration
    var seconds;
    if(startHour !== 12 && startDay === 'PM') startHour += 12;
    if(endHour !== 12 && endDay === 'PM') endHour += 12;
    if(startHour === 12 && startDay === 'AM') startHour = 0;
    if(endHour === 12 && endDay === 'AM') endHour = 0;
    if(startHour > endHour || (startHour === endHour && startMin > endMin)) {
        var hms = startHour + ":" + startMin + ":00";
        var startT = new Date("1970-01-01 " + hms);
        hms = endHour + ":" + endMin + ":00";
        var endT = new Date("1970-01-02 " + hms);
        seconds = (endT - startT) / 1000;
    } else {
        var hms = startHour + ":" + startMin + ":00";
        var startT = new Date("1970-01-01 " + hms);
        hms = endHour + ":" + endMin + ":00";
        var endT = new Date("1970-01-01 " + hms);
        seconds = (endT - startT) / 1000;
    }

    // Store information
    var activityDatabase = JSON.parse(fs.readFileSync(activityDatabaseFile, 'utf8'));

    // Construct activity data
    var date = new Date();
    var key = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    // console.log("Store to key:", key);
    var data = {
        "name": activityName,
        "type": type,
        "start": startTime,
        "end": endTime,
        "duration": seconds,
    };

    // Store by username
    var userActivities = {};
    if(activityDatabase.hasOwnProperty(username)) {
        userActivities = activityDatabase[username];
    }

    if(!userActivities.hasOwnProperty(key)) {
        userActivities[key] = [data];
    } else {
        var activities = userActivities[key];
        activities.push(data);
        userActivities[key] = activities;
    }

    activityDatabase[username] = userActivities;

    console.log("Updated result:", activityDatabase);

    // Write to file
    var data = JSON.stringify(activityDatabase);
    fs.writeFileSync(activityDatabaseFile, data, 'utf8');

    return '';
}