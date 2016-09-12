const mongoose = require('mongoose');
const School   = mongoose.model('School');

const ProjectSchema = new mongoose.Schema({
  country: {type: String, trim: true},
  projects: [{
    name: {type: String, trim: true},
    acronym: {type: String, trim: true},
    projectNumber: {type: String, trim: true},
    leadOrg: {type: String, trim: true},
    partnerOrgs: [{type: String, trim: true}],
    schools: [ School.schema ],
    outputs: [{
      number: {type: String, trim: true},
      desc: {type: String, trim: true},
      indicators: [{
        number: {type: String, trim: true},
        desc: {type: String, trim: true},
        source: {type: String, trim: true},
        dataDisaggregation: {type: String, trim: true},
        progress: [{
          date: {type: Date},
          overview: {type: String, trim: true},
          RAG: {type: String, enum: ['red', 'amber', 'green']}
        }],
        milestones: [{
          quarter: {type: String, trim: true},
          desc: {type: String, trim: true},
          projectStatus: {type: String, enum:['Exceeded', 'Fully met', '90% met', 'Decision to postpone', 'Delayed/Missed', 'No longer applicable'], trim: true},
          plannedCompletionDate: {type: Date},
          actualCompletionDate: {type: Date},
          narrative: {type: String, trim: true},
          RAG: {type: String, enum: ['red', 'amber', 'green']},
          milestoneVerification: [{
            monitored: {type: String, enum:['yes', 'no'], trim: true},
            cfmComments: {type: String, trim: true},
            cfmVerificationMeans: {type: String, trim: true},
            cemComments: {type: String, trim: true},
            cemIndicationQuality: {type: String, trim: true},
            cemVerificationMeans: {type: String, trim: true},
            cemStatus: {type: String, enum:['Exceeded', 'Fully met', '90% met', 'Decision to postpone', 'Delayed/Missed', 'No longer applicable'], trim: true},
            agree: {type: String, enum: ['Agree', 'Disagree']}
          }]
        }],
        baseline: [
          {
            year: {type: Number, trim: true, max: 2019, min: 2014},
            planned: {type: String, trim: true},
            comment: {type: String, trim: true}
          }
        ],
        targets: [
          {
            year: {type: Number, trim: true, max: 2019, min: 2014},
            planned: {type: String, trim: true},
            achieved: {type: String, trim: true},
            comment: {type: String, trim: true}
          }
        ],
      }]
    }],
    timestamps: {type: Date}
  }]
});
  

// ProjectSchema.pre('save', function(next) {
//   now = new Date();
//   this.updatedAt = now;
//   if (!this.createdAt) {
//     this.createdAt = now;
//   }
//   next();
// });

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;