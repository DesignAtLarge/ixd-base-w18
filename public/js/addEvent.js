var acmO = {
  "clubEvent" : "GBM #1",
  "clubName" : "ACM",
  "location" : "Cognitive Science Building",
  "month" : "1",
  "day" : "21",
  "id": "acm",
};
var descoO = {
  "clubEvent" : "Portfolio Review",
  "clubName" : "Design Co.",
  "location" : "Rady School of Management",
  "month" : "1",
  "day": "24",
  "id" : "desco",
};
var vsaO = {
  "clubEvent" : "Bonfire",
  "clubName" : "VSA",
  "location": "Geisel Loop(pickup)",
  "month" : "1",
  "day": "24",
  "id": "vsa",
};
var tedO = {
  "clubEvent" : "GBM #1",
  "clubName" : "TED@UCSD",
  "location" : "Center Hall",
  "month" : "2",
  "day" : "2",
  "id" : "ted",
};

function addHeart(id) {
  var image = document.getElementById(id);

  if(image.src.match("../images/heart_outline.png")) {
    image.src = "../images/pink_heart.png";

    //$.get("http://localhost:3000/upcomingEvents", callback);
    
  }
  else {
    image.src = "../images/heart_outline.png";
  }
}

/*
function callback(result){
	console.log(result);

}
*/