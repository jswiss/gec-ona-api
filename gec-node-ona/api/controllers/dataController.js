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

const getCountry = (req, res) => {

  let id = req.params.id;

  Project.findOne({country: id}, (error, country) => {
    if (error) res.json({ message: 'this country could not be found because ' + error });

    res.json({ country: country })
  })
}

const getProject = (req, res) => {

  let id = req.params.id;

  Project.findOne({projectNumber: id}, (error, project) => {
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
  getHome: getHome,
  getProject: getProject,
  getCountry: getCountry,
  updateProject: updateProject
}