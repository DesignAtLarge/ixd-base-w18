
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
var add = require('./routes/add');
var report = require('./routes/report');
var home = require('./routes/home');
var addConfirmation = require('./routes/addConfirmation');
var userAction = require('./routes/userAction');
var settings = require('./routes/settings');
var suggestions = require('./routes/suggestions');
var help = require('./routes/help');
var details = require('./routes/details');

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
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
app.get('/add', add.view);
app.get('/report', report.view);
app.get('/home', home.view);
app.get('/help', help.view);
app.get('/addConfirmation', addConfirmation.view);
app.get('/userSignUp', userAction.signUpAction);
app.get('/userLogIn', userAction.logInAction);
app.get('/settings', settings.view);
app.get('/userRetrieveSettings', userAction.retrieveSettings);
app.get('/userGetActivities', userAction.getActivities);
app.get('/userDeleteActivity', userAction.deleteActivity);
app.get('/userGetTypes', userAction.getTypes);
app.get('/userEditActivity', userAction.editActivity);
app.get('/userSetSettings', userAction.setSettings);
app.get('/suggestions', suggestions.view);
app.get('/details', details.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
