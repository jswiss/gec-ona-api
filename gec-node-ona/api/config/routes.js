const express       = require('express');
const router        = express.Router();
const bodyParser    = require('body-parser');
const qmfController = require('../controllers/qmfController');

router.route('/monitoring/:quarter')
  .get(qmfController.getQuarter)

module.exports = router;