
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Route to the js files
var index = require('./routes/index');
var create_profile = require('./routes/create_profile');
var log_in = require('./routes/log_in');
var home = require('./routes/home');
var profile = require('./routes/profile');
var choose_profile = require('./routes/choose_profile');
var employer_create = require('./routes/employer_create');
var employer_profile = require('./routes/employer_profile');
var employer_home = require('./routes/employer_home');
var jobs = require('./routes/jobs');

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

// URLS that we can use in our html
app.get('/', index.view);
app.get('/create_profile', create_profile.hunter_page1);
app.get('/home/:user', home.view);
app.get('/log_in', log_in.view);
app.get('/authenticate', log_in.authenticate);
app.get('/profile/:user', profile.view);
app.get('/add', create_profile.add);
app.get('/employer_add', employer_create.add);
app.get('/choose_profile', choose_profile.view);
app.get('/employer_create', employer_create.page1);
app.get('/employer_create_ii', employer_create.page2);
app.get('/employer_profile/:user', employer_profile.view);
app.get('/employer_home/:user', employer_home.view);
app.get('/jobs/:user', jobs.view);


// app.get('/home', home.view);
app.get('/create_profile_ii', create_profile.hunter_page2);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
