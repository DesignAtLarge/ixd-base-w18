'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.card-link').click(deleteClick);
	// $('#colorBtn').click(randomizeColors);
}
function deleteClick(e) {
	//console.log(data);
	e.preventDefault();
	console.log('The Delete Functionality has not been implemented yet :)');
	//var toDel = data.toLog.unshift(this);
	//data.toLog.splice(toDel,1);
	//data.toLog.unshift("HI");
}
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	console.log('User clicked on project ' + idNumber);
	$.get('http://localhost:3000/project/' + idNumber, callBackFn);
}

function callBackFn(result) {
	var projectHTML =
		'<a href="#" class="thumbnail">' +
		'<img src="' +
		result['image'] +
		'" class="detailsImage">' +
		'<p>' +
		result['title'] +
		'</p>' +
		'<p><small>' +
		result['date'] +
		'</small></p></a>' +
		result['summary'];
	$(`#project${result['id']} .details`).html(projectHTML);
}

// fetch('/actLog.json')
// 	.then(function(res) {
// 		return res.json();
// 	})
// 	.then(function(data) {
// 		console.log(data);
// 	});

function comingSoon(e) {
	alert('Coming Soon!');
}
