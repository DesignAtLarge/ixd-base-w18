/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var project = require('./routes/project');
var filter = require('./routes/filter');
var filter2 = require('./routes/filter2');
var filter3 = require('./routes/filter3');
var activity = require('./routes/activity');
var setting = require('./routes/setting');
var about = require('./routes/about');
var complete = require('./routes/complete');
var logIn = require('./routes/logIn');
var logIn = require('./routes/logIn');
var filtered = require('./routes/filtered');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// Add routes here
app.get('/', logIn.view);
app.get('/filter', filter.view);
app.get('/filter2', filter2.view);
app.get('/filter3', filter3.view);
//app.get('/activity', activity.view);
app.get('/setting', setting.view);
app.get('/about', about.view);
app.get('/filtered', filtered.view);
app.get('/project/:id', project.projectInfo);
app.get('/logIn', logIn.view);
app.get('/complete', complete.view);
app.get('/index', index.view);
app.get('/activity/:id', activity.activityInfo);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
