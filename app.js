
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var club = require('./routes/club');
var event = require('./routes/event');
var calendar = require('./routes/calendar');
var login = require('./routes/login');
var astro = require('./routes/astro');
var acm = require('./routes/acm');
var upcomingEvents = require('./routes/upcomingEvents');
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
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/club', club.view);
app.get('/index', index.view);
app.get('/event', event.view);
app.get('/calendar', calendar.view);
app.get('/astro', astro.view);
app.get('/acm', acm.view);
app.get('/saved', upcomingEvents.upload);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
