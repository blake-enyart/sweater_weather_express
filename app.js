require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
const cors = require('cors');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/v1/users');
var sessionsRouter = require('./routes/api/v1/sessions');
var forecastRouter = require('./routes/api/v1/forecast');
var favoritesRouter = require('./routes/api/v1/favorites');

var app = express();

// Bind the app to a specified port
// var port = process.env.PORT || 3000;
// app.listen(port);
// console.log("Listening on port " + port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/sessions', sessionsRouter);
app.use('/api/v1/forecast', forecastRouter);
app.use('/api/v1/favorites', favoritesRouter);

module.exports = app;
