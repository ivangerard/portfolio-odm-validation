var express = require('express')
var cors = require('cors')
var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express()
var flash = require('connect-flash');
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
var passport = require('passport');


// passport
var flash = require('connect-flash');
var path = require('path')
var cookieParser = require('cookie-parser');
var session = require('express-session');

//tutup passport

app.use(cors())
app.use(morgan('dev')); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


mongoose.connect('mongodb://localhost/stackoverflow')
require('./controllers/passport')(passport); // pass passport for configuration

app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({
    secret: 'ivangerardmagic'
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.use(methodOverride());

app.listen(port);
console.log('The magic happens on port ' + port);
