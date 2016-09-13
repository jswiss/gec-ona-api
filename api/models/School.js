const mongoose = require('mongoose');

// const Project = mongoose.model('Project');

const SchoolSchema = new mongoose.Schema({
  country: {type: String, trim: true},
  projectName: {type: String, trim: true},
  projectAcronym: {type: String, trim: true},
  projectNumber: {type: String, trim: true},
  name: {type: String, trim: true},
  code: {type: String, trim: true},
  createDate: {type: Date, trim: true},
  region: {type: String, trim: true},
  state: {type: String, trim: true},
  county: {type: String, trim: true},
  district: {type: String, trim: true},
  city: {type: String, trim: true},
  village: {type: String, trim: true},
  lat: {type: Number, trim: true},
  lng: {type: Number, trim: true},
  forms: [{type: String, trim: true}],
  buildingType: {type: String, trim: true},
  yearBuilt: {type: String, trim: true},
  schoolType: {type: String, enum:['primary', 'secondary', 'nursery'], trim: true},
  toilets: {
    male: {type: Number, trim: true},
    female: {type: Number, trim: true}
  },
  pupils: [{
    firstName: {type: String, trim: true},
    lastName: {type: String, trim: true},
    otherNames: {type: String, trim: true},
    birthDate: {type: Date, trim: true},
    gender: {type: String, trim: true},
    currentForm: {type: String, trim: true}
  }],
  teachers: [{
    firstName: {type: String, trim: true},
    lastName: {type: String, trim: true},
    otherNames: {type: String, trim: true},
    birthDate: {type: Date, trim: true},
    gender: {type: String, trim: true},
    currentForm: [{type: String, trim: true}]
  }],
});
  

// ProjectSchema.pre('save', function(next) {
//   now = new Date();
//   this.updatedAt = now;
//   if (!this.createdAt) {
//     this.createdAt = now;
//   }
//   next();
// });

const School = mongoose.model('School', SchoolSchema);

module.exports = School;