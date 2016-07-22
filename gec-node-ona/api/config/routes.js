var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var mainController = require('../controllers/mainController')

router.route('/news/:year/:category')
  .get(mainController.getData)

module.exports = router;