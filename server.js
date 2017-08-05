var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();

// ================ DB CONFIG ================
var dbConfig = require('./config/database.js');
mongoose.connect(dbConfig.url);

// ================ ROUTES ================
var geoRoute = require('./app/routes/geodata.js');
var mapsRoute = require('./app/routes/maps.js');

// ================ EXPRESS SETUP ================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware to use for all requests
var myLogger = function(req, res, next) {
    //log (Do analytics for all request , do a common task like verification here)
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("A request came:- " + fullUrl);
    next(); //make sure we go to the next routes and not stop here
};

// ================ SETUP HANDLEBARS FOR TEMPLATING ================
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(myLogger);

// ================ DEFINE ROUTES ================
app.use('/geodata', geoRoute);
app.use('/maps', mapsRoute);

//START THE SERVER
// ======================================================
var port = 1337; //set our port
app.listen(port);
console.log('Server running at port :- ' + port);