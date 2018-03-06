'use strict';

var events = [];
var id = 0

$(document).ready(() => {
	console.log("javascript loaded");

	let splitPath = window.location.pathname.split('/');
	//let id = parseInt(splitPath[splitPath.length - 1]);
	console.log(id);
	if(id === 0){
		$('button.rewind').prop('disabled', true);
    }
    
    
    $.get('/api/event', (res) => {
        events = res.events;

        displayEvent(id);
    });
})


$("button.uninterested").click(cycleForwardThroughEvents);
$("button.rewind").click(cycleBackwardThroughEvents);

function displayEvent(id){
    console.log(id);
    var event = events[id % events.length];
    $("img.eventImage").attr("src", event.imageURL);
    $("h6.eventName").text(event.name);
    $("span.eventDistance").text("10 miles");
    $("p.eventDescription").text(event.description);
}

function cycleForwardThroughEvents(event) {
	event.preventDefault();
	let splitPath = window.location.pathname.split('/');
	//let id = parseInt(splitPath[splitPath.length - 1]) + 1;
	console.log(id);
    //$(location).attr('href', '/eventSearch/' + id);
    window.history.pushState('', '', '/eventSearch/' + id);
    displayEvent(id);
}

function cycleBackwardThroughEvents(event) {
	event.preventDefault();
	let splitPath = window.location.pathname.split('/');
	//let id = parseInt(splitPath[splitPath.length - 1]) - 1;
	window.history.pushState('', '', '/eventSearch/' + id);
    displayEvent(id);
}