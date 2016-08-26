const request = require('ajax-request');
const url     = '';
const app     = express();
const server  = require('http').createServer(app);
const io      = require('socket.io')(server);

const getAll = (req, res) => {
  //socket stuff here
}

const getCountry = (req, res) => {
  //more socket stuff, filtered by country
}

const getCountry = (req, res) => {
  //more socket stuff, filtered by country
}

module.exports = {
  getAll: getAll,
  getCountry: getCountry,
  getProject: getProject
}