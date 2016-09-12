const express    = require('express');
const dotenv     = require('dotenv').config();
const app        = express();
const server     = require('http').createServer(app);
const cors       = require('cors');
const path       = require('path');
const request    = require('ajax-request');
const bodyParser = require('body-parser');
// const bunyan     = require('bunyan');
const mongoose   = require('mongoose');
const logger     = require('morgan');
const io         = require('socket.io')(server);
const configDB   = require('./api/config/database')
const routes     = require('./api/config/routes');
//seed data already sent in.
// const seedDB     = require('./seed');
const port       = process.env.PORT || 3000;

mongoose.connect(configDB.url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ 
  limit: '500mb',
  extended: true,
  parameterLimit: 5000
}));

app.use('/', routes);

// error handlers
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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

module.exports = {
  app: app,
  server: server,
  io: io
}

