
/**
 * Module dependencies.
 */

var express = require('express');
var dotenv = require('dotenv');
dotenv.config();
var http = require('http');
var path = require('path');
const { Client } = require('pg');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var myClasses = require('./routes/myClasses');
var classPage = require('./routes/class');
var profilePage = require('./routes/profile');
var searchPage = require('./routes/search');
var addClassPage = require('./routes/addClass');

var app = express();


// Postgres
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});


client.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.db = client;

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
app.get('/myClasses', myClasses.view);
app.get('/class/:name', classPage.viewClass);
app.get('/profile', profilePage.viewProfile);
app.get('/search', searchPage.viewSearch);
app.get('/addClass', addClassPage.addClass);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
