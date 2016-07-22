var express    = require('express');
var app        = express();
var request    = require('ajax-request');
var bodyParser = require('body-parser');
var bunyan     = require('bunyan');
var mongoose   = require('mongoose');
var logger     = require('morgan');
var routes     = require('./config/routes');
var port       = process.env.PORT || 1234;

app.use(logger('dev'));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ 
  limit: '500mb',
  extended: true,
  parameterLimit: 5000
}));

app.use(routes);

// error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

//runs server on port 1234
app.listen(port, function() {
    console.log('server has been started on port %s', port);
});


module.exports = app;

