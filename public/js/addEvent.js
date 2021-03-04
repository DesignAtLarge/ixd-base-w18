$(document).ready(function () {
  var allEvents = {};
  var saved = {};
  var add;
  initializePage();
});

function initializePage() {
  $.getJSON("../json/upcoming.json", function(json){
  $(".heart").click(function () {
    var name = $(this).attr("id");

$.each(json, function(i,item){
    if(json[i] == name){
        allEvents = json[i];
        add = JSON.parse(allEvents);
    }
})

  });
});

$.getJSON("../json/calendar.json", function(json){
    json.push(allEvents);
});


}

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
