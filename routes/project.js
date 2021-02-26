var projects = require('../projects.json');

exports.projectInfo = function(request, response) {
	var projectID = request.params.id;
	if (projectID == "random") {
		projectID = Math.floor(Math.random() * projects.length) + 1;
	} else {
		projectID = parseInt(projectID);
	}

  	var project = projects[projectID-1]; // of by one, our first project has index 0
  	response.json(project);
}