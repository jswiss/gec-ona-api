const request = require('ajax-request');
const School = require('../models/School');
const Project = require('../models/Project');

const getAll = (req, res) => {
    Project.find((error, projects) => {
      // console.log("hi i'm in the getAll")
      // debugger;
    if (error) res.json({message: 'Could not find any projects'});

    res.json({ projects: projects });
  }).select('-__v');
};

const getSchools = (req, res) => {
  School.find((error, schools) => {
    if (error) res.json({ message: 'Could not find schools. Error message: ', error });

    res.json({ schools: schools })
  });
}

const createSchool = (req, res) => {

  let newSchool = req.body;
  newSchool.createDate = new Date();
  // let school = new School();

  newSchool.save = (err) => {
    if(err)
      res.send(err);
 
      res.json({ message: 'new school created!' });
  }
}

const getSchool = (req, res) => {

  let schoolCode = req.params.schoolCode;

  School.findOne({ code: schoolCode }, (error, school) => {
    if(error) res.json({message: 'Could not find school b/c:' + error});
    console.log(school);
    res.json({school: school});
  });
};

const updateSchool = (req, res) => {

  let schoolCode = req.params.schoolCode;

  School.findOne({ code: schoolCode }, (error, school) => {

    if(error) res.json({message: 'Could not find school b/c:' + error});

    school.save(function(error) {
      if(error) res.json({messsage: 'Could not update school b/c:' + error});

      res.json({message: 'school successfully updated'});
    });
  });
}

const deleteSchool = (req, res) => {
  
  School.remove({
    code: req.params.schoolCode
  }, (err, school) => {
    if (err)
      res.send(err);
    console.log(`Successfully deleted school ${req.params.schoolCode}`)
    res.json({ message: `Successfully deleted school ${req.params.schoolCode}` })
  })
}

const getCountrySchools = (req, res) => {

  let country = req.params.country;

  School.find({ country: country }, (error, countrySchools) => {
    if (error) res.json({ message: 'this country could not be found because ' + error });

    res.json({ countrySchools: countrySchools });
  })
}

const getProjectSchools = (req, res) => {

  let projectNumber = req.params.projectNumber;

  School.find({ projectNumber: projectNumber }, (error, projectSchools) => {
    if (error) res.json({ message: 'this country could not be found because ' + error });

    res.json({ projectSchools: projectSchools });
  })
}

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

  let projectNumber = req.params.projectNumber;

  // Project.findById({_id: id}, (error, project) => {
  Project.findOne({}, {projects: {$elemMatch: {'projectNumber': projectNumber}}}, (error, project) => {

    if(error) res.json({message: 'Could not find project b/c:' + error});

    project.save(function(error) {
      if(error) res.json({messsage: 'Could not update project b/c:' + error});

      res.json({message: 'project successfully updated'});
    });
  });
}

module.exports = {
  getAll: getAll,
  getSchools: getSchools,
  createSchool: createSchool,
  getSchool: getSchool,
  updateSchool: updateSchool,
  deleteSchool: deleteSchool,
  getCountrySchools: getCountrySchools,
  getProjectSchools: getProjectSchools,
  getProject: getProject,
  getCountry: getCountry,
  updateProject: updateProject
}