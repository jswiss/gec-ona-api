const express    = require('express');
const app        = express();
const cors       = require('cors');
const path       = require('path');
const request    = require('ajax-request');
const bodyParser = require('body-parser');
const bunyan     = require('bunyan');
const mongoose   = require('mongoose');
const logger     = require('morgan');
const configDB   = require('./config/database')
const routes     = require('./config/routes');
const port       = process.env.PORT || 1234;

mongoose.connect(configDB.url);

app.use(cors());
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

