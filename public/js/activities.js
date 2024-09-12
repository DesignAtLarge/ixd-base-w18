const usersFile = "users.json";
const activitiesFile = "activities.json";
const activityTypesFile = "activityTypes.json";
const fs = require("fs");

const ONE_DAY_TIME = 1000 * 60 * 60 * 24;
const WEEK_TO_GEN = 3;

function editActivity(username, activityName, type, startTime, endTime, date, index) {
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

    var data = {
        "name": activityName,
        "type": type,
        "start": startTime,
        "end": endTime,
        "duration": seconds,
    };

    // Read information
    var activityDatabase = JSON.parse(fs.readFileSync(activitiesFile, 'utf8'));

    // Store by username
    if(!activityDatabase.hasOwnProperty(username)) {
        userActivities = activityDatabase[username];
        return "User not found";
    }

    activityDatabase[username][date][index] = data;

    console.log("Updated result:", activityDatabase);

    // Write to file
    var data = JSON.stringify(activityDatabase);
    fs.writeFileSync(activitiesFile, data, 'utf8');

    return '';
}

function getActivitySummary(username) {
    // Get user setting start date
    var allUserActivities = JSON.parse(fs.readFileSync(activitiesFile, 'utf8'));
    var activityTypes = JSON.parse(fs.readFileSync(activityTypesFile, 'utf8'));
    var users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

    // Intialize all types and fill in value
    var typeData = [];
    for(var i = 0; i < activityTypes["types"].length; i++) {
        var type = activityTypes["types"][i];
        type["count"] = [0,0,0];
        type["days"] = [0,0,0];
        typeData.push(type);
    }

    // Collect activities
    var today = new Date();

    // Get user setting start day
    var startDay = users[username]['settings']['startDay'];
    var offsetDay;
    if(startDay < today.getDay()) {
        offsetDay = today.getDay() - startDay;
    } else {
        offsetDay = today.getDay() + 7 - startDay;
    }

    // Only store 3 weeks of activities
    var startDate = new Date(today - (offsetDay*ONE_DAY_TIME));
    startDate = new Date((startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear());
    console.log('Start day:', startDate);

    // Generate weekly report
    var userActivities = allUserActivities[username];
    var dayCount = [];
    for (var date in userActivities) {
        var dateActivities = userActivities[date];

        // Calculate how many day prior the activities are for
        var lastDate = new Date(date);
        var diffTime = startDate - lastDate;
        var diffDays = Math.ceil(diffTime / ONE_DAY_TIME);

        // 3 Weeks prior
        if(diffDays > 7 * WEEK_TO_GEN) continue;

        // Count day of input
        var alreadyCounted = false;
        for(var i = 0; i < dayCount.length; i++) {
            if(dayCount[i] === diffDays) {
                alreadyCounted = true;
                break;
            }
        }

        // Store activities by type
        for(var i = 0; i < dateActivities.length; i++) {
            var activity = dateActivities[i];
            for(var j = 0; j < typeData.length; j++) {
                if(typeData[j]["name"] === activity["type"]) {
                    if(diffDays <= 0) {
                        typeData[j]["count"][0] += activity["duration"];
                        if(!alreadyCounted) typeData[j]["days"][0] += 1;
                    } else if(diffDays <= 7) {
                        typeData[j]["count"][1] += activity["duration"];
                        if(!alreadyCounted) typeData[j]["days"][1] += 1;
                    } else {
                        typeData[j]["count"][2] += activity["duration"];
                        if(!alreadyCounted) typeData[j]["days"][2] += 1;
                    }
                    break;
                }
            }
        }
    }

    return typeData;
}

function getActivites(username) {
    // Get user setting start date
    var allUserActivities = JSON.parse(fs.readFileSync(activitiesFile, 'utf8'));

    // Collect activities
    var today = new Date();
    today = new Date((today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear());

    // Generate weekly report
    var temp = {};
    var userActivities = allUserActivities[username];
    for (var date in userActivities) {
        var userActivity = userActivities[date];

        // Calculate how many day prior the activities are for
        var lastDate = new Date(date);
        var diffTime = today - lastDate;
        var diffDays = Math.ceil(diffTime / ONE_DAY_TIME);

        // Store activities by type
        var data = {
            "date": date,
            "activities": userActivity,
        };
        temp[diffDays] = data;
    }

    // Sort by most recent
    var length = Object.keys(temp).length;
    var sortedData = [];
    for(var i = 0; sortedData.length < length; i++) {
        if(temp.hasOwnProperty(i)) {
            var data = {
                "date": temp[i]['date'],
                "activities": temp[i]['activities'],
            };
            sortedData.push(data);
        }
    }

    console.log("Sorted data:", sortedData);

    return sortedData;
}

function deleteActivity(username, date, index) {
    // Get user setting start date
    var allUserActivities = JSON.parse(fs.readFileSync(activitiesFile, 'utf8'));

    // Find date and delete based on entry
    var activities = allUserActivities[username];
    if(activities.hasOwnProperty(date)) {
        activities[date].splice(index, 1);

        // If empty, delete entry
        if(activities[date].length == 0) {
            delete activities[date];
        }

        var data = JSON.stringify(allUserActivities);
        fs.writeFileSync(activitiesFile, data, 'utf8');
    }

    return getActivites(username);
}

function getTypes() {
    var activityTypes = JSON.parse(fs.readFileSync(activityTypesFile, 'utf8'));
    return activityTypes['types'];
}

exports.getActivitySummary = getActivitySummary;
exports.getActivites = getActivites;
exports.deleteActivity = deleteActivity;
exports.getTypes = getTypes;
exports.editActivity = editActivity;