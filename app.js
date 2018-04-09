var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var logger = require('morgan');
var rek = require('rekuire');

var cors = require('cors');// origins



var loader = require('route-bootloader');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var transactRouter = require('./routes/transaction');
var riderRouter = rek('riders');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use it before all route definitions
app.use(cors({origin: '*'}));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/transact', transactRouter);
app.use('/riders', riderRouter);
//loader(app);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
