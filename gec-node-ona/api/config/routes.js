const express        = require('express');
const router         = express.Router();
const bodyParser     = require('body-parser');
const qmfController  = require('../controllers/qmfController');
const dataController = require('../controllers/dataController');
const feedController = require('../controllers/feedController');

router.route('/')
  .get(dataController.getAll);

// router.route('/projects')
//   .get(dataController.getAll);

router.route('/monitoring/:quarter')
  .get(qmfController.getQuarter);

router.route('/country/:id/projects')
  .get(dataController.getAll);

router.route('/country/:id/projects/:id')
  .get(dataController.getProject);

router.route('/country/:id/projects/:id/admin')
  .get(dataController.getProject)
  .post(dataController.updateProject);

router.route('/country/:id')
  .get(dataController.getCountry);

module.exports = router;