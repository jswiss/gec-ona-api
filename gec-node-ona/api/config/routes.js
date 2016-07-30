const express        = require('express');
const router         = express.Router();
const bodyParser     = require('body-parser');
const qmfController  = require('../controllers/qmfController');
const dataController = require('../controllers/dataController');

router.route('/')
  .get(dataController.getHome);

router.route('/projects')
  .get(dataController.getAll);

router.route('/monitoring/:quarter')
  .get(qmfController.getQuarter);

router.route('/projects')
  .get(dataController.getAll);

router.route('/projects/:id')
  .get(dataController.getProject);

module.exports = router;