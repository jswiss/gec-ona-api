const request = require('ajax-request');
const Project = require('../models/Project');

const getHome = (req, res) => {
  res.status(200).json({ message: 'Connected!!' });
};

const getAll = (req, res) => {
  Project.find(function(error, projects) {
    if(error) res.json({message: 'Could not find any projects'});

    res.json({projects: projects});
  });
};

const getProject = (req, res) => {

  let id = req.params.id;

  Project.findOne({projectNumber: id}, (error, project) => {
    if(error) res.json({message: 'Could not find project b/c:' + error});

    res.json({project: project});
  });
};

module.exports = {
  getAll: getAll,
  getHome: getHome,
  getProject: getProject
}