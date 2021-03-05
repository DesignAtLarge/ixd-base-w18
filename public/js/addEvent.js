const { json } = require("express");
var savedJson = require("../json/calendar.json");
var upcomingJson = require("../json/upcoming.json");

function clubHeart(id,name) {
    var image = document.getElementById(id);
    var name = document.getElementById(id);
    var event;

    if (image.src.match("../images/heart_outline.png")) {
        image.src = "../images/pink_heart.png";

        for(var i =0; i< upcomingJson.length; i++){        
            if(upcomingJson[i].hasOwnProperty(name) == true){
                event = upcomingJson[i];
                console.log(event)
            }
        }

    }
    else {
        image.src = "../images/heart_outline.png";
    }

    
}


json.push(allEvents);


function addEvent(id) {}

/*
{
    "theTeam": [
      { "teamId": "1", "status": "pending" },
      { "teamId": "2", "status": "member" },
      { "teamId": "3", "status": "member" }
    ]
  }
  
  
  
  var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
  
  var obj = JSON.parse(jsonStr);
  obj['theTeam'].push({"teamId":"4","status":"pending"});
  jsonStr = JSON.stringify(obj);
  // "{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"},{"teamId":"4","status":"pending"}]}"
  
  
  
  var parse_obj = JSON.parse(Str_txt);
  parse_obj['theTeam'].push({"teamId":"4","status":"pending"});
  Str_txt = JSON.stringify(parse_obj);
  Output //"{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"},{"teamId":"4","status":"pending"}]}"
  */
