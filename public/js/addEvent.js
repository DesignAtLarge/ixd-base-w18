
function addHeart(id) {
  var image = document.getElementById(id);

  if(image.src.match("../images/heart_outline.png")) {
    for(  var i = 0 ; i < events.length; i++){
      if(events[i].id === id){
        calendar.saved_events.push(events[i]);
      }
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/addCalendar", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(calendar));
    image.src = "../images/pink_heart.png";    
  }
  else {
    image.src = "../images/heart_outline.png";
  }
}

