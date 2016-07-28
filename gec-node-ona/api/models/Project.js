const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  projectNumber: {type: Number, required: true, trim: true},
  leadOrg: {type: String, required: true, trim: true},
  partnerOrgs: [{type: String, required: true, trim: true}],
  country: {type: mongoose.Schema.ObjectID, required: true, ref: 'Country'},
  assumptions: {type: String, trim: true},
  mgmtInfo: [
        {
          indicator: {type: String, required: true, trim: true},
          definition: [
            {
              beneficiaryCategory: {type: String, trim: true}
            }
          ],
          question: {type: String, required: true, trim: true},
          activity: [
            {
              quarter: {type: String, required: true, trim: true},
              achieve: {type: Number, required: true, trim: true},
              commentary: {type: String, required: true, trim: true}
            }
          ]
        }
      ],
  outputs: [{
    number: {type: String, required: true, trim: true},
    desc: {type: String, required: true, trim: true},
    indicators: [{
      number: {type: String, required: true, trim: true},
      desc: {type: String, required: true, trim: true},
      source: {type: String, trim: true},
      dataDisaggregation: {type: String, trim: true},
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
      milestones: [{
        quarter: {type: String, required: true, trim: true},
        desc: {type: String, required: true, trim: true},
        projectStatus: {type: String, enum:['Exceeded', 'Fully met', '90% met', 'Decision to postpone', 'Delayed/Missed', 'No longer applicable'], trim: true},
        plannedCompletionDate: {type: Date},
        actualCompletionDate: {type: Date},
        narrative: {type: String, trim: true},
        //need to add in-country milestone verification stuff here
        cemStatus: {type: String, enum:['Exceeded', 'Fully met', '90% met', 'Decision to postpone', 'Delayed/Missed', 'No longer applicable'], trim: true},
        agree: {type: String, enum: ['Agree', 'Disagree']}
      }]
    }]
  }],
  timestamps: true
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