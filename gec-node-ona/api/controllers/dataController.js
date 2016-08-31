const request = require('ajax-request');
const Project = require('../models/Project');

const getAll = (req, res) => {
    Project.find(function(error, projects) {
    if(error) res.json({message: 'Could not find any projects'});

    res.json({projects: projects});
  });};

// const getAll = (req, res) => {
//   Project.find(function(error, projects) {
//     if(error) res.json({message: 'Could not find any projects'});

//     res.json({projects: projects});
//   });
// };

const getCountry = (req, res) => {

  let id = req.params.id;

  Project.findOne({country: id}, (error, country) => {
    if (error) res.json({ message: 'this country could not be found because ' + error });

    res.json({ country: country })
  })
}

const getProject = (req, res) => {

  // let id = req.params.id;
  let projectNumber = req.params.projectNumber;

  // Project.findOne({ country: id }).elemMatch({projects: { projectNumber: projectNumber }}, (error, project) => {
  // Project.find({ 'country.projects': { "$elemMatch": { "projectNumber": projectNumber }}}, (error, project) => {
  Project.findOne({}, {projects: {$elemMatch: {'projectNumber': projectNumber}}}, (error, project) => {
    if(error) res.json({message: 'Could not find project b/c:' + error});
    res.json({project: project});
  });
};

const updateProject = (req, res) => {
  let id = req.params.id;

  Project.findById({_id: id}, (error, project) => {
    if(error) res.json({message: 'Could not find project b/c:' + error});

    //add all possible update fields here (a bitch, I know)
    // if(req.body.author) project.author = req.body.author;
    // if(req.body.text) project.text = req.body.text;

    project.save(function(error) {
      if(error) res.json({messsage: 'Could not update project b/c:' + error});

      res.json({message: 'project successfully updated'});
    });
  });
}

module.exports = {
  getAll: getAll,
  // getHome: getHome,
  getProject: getProject,
  getCountry: getCountry,
  updateProject: updateProject
}