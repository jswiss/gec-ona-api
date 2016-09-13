const express        = require('express');
const router         = express.Router();
const bodyParser     = require('body-parser');
const qmfController  = require('../controllers/qmfController');
const dataController = require('../controllers/dataController');
const feedController = require('../controllers/feedController');

router.route('/')
  .get(dataController.getAll);

router.route('/monitoring/:id')
  .get(qmfController.getQuarter);

router.route('/projects/:projectNumber')
  .get(dataController.getProject);

router.route('/projects/:projectNumber/admin')
  .get(dataController.getProject)
  .put(dataController.updateProject);

router.route('/schools')
  .get(dataController.getSchools)
  .post(dataController.createSchool);

router.route('/schools/country/:country')
  .get(dataController.getCountrySchools);

router.route('/schools/project/:projectNumber')
  .get(dataController.getProjectSchools);

router.route('/schools/school/:schoolCode')
  .get(dataController.getSchool)
  .put(dataController.updateSchool)
  .delete(dataController.deleteSchool);

router.route('/country/:id')
  .get(dataController.getCountry);

module.exports = router;