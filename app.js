
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Route files
var index = require('./routes/index');
var chore = require('./routes/chore');
var expense = require('./routes/expense');
var stats = require('./routes/stats');
var addChore = require('./routes/addChore');
var addExpense = require('./routes/addExpense');
var login = require('./routes/login');
var addUser = require('./routes/addUser');
var expenseHomepage = require('./routes/expenseHomepage');
var signOut = require ('./routes/signOut');

// all environments
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
var hbs = require('handlebars');
hbs.registerHelper("ifequal", function(v1, v2, options)
                   {
                       if (v1 === v2){
                           return options.fn(this);
                          // print("ture")
                          //return true;
                       }
                       else{
                           return options.inverse(this);
                           //return false;
                       }
                   });

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//might need to add a production code as well

app.get('/', login.view);
app.get('/chore', chore.view);
app.post('/chores/:id', chore.edit);
app.post('/chores/done/:id', chore.done);
app.get('/addChore', addChore.addChore);
app.get('/addExpense', addExpense.addExpense);
app.get('/expense', expense.view);
app.post('/expense/edit/:id', expense.edit);
app.get('/stats', stats.view);
app.get('/homepage', index.view);
app.get('/homepageAlt', index.viewAlt);
app.post('/addUser', addUser.addUser);
app.get('/expenseHomepage', expenseHomepage.view);
app.get('/signOut', signOut.signOut);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
