const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  leadOrg: {type: String, required: true, trim: true},
  partnerOrg: [{type: String, required: true, trim: true}],
  country: {type: mongoose.Schema.ObjectID, required: true, ref: 'Country'},
  outputs: {
    desc: {type: String, required: true, trim: true},
    indicators: {
      desc: {type: String, required: true, trim: true},
      milestones: {
        desc: {type: String, required: true, trim: true},
        definition: {type: String, required: true, trim: true},
        question: {type: String, required: true, trim: true},
        targets: {
          quarter: {type: String, required: true, trim: true},
          target: {type: Number, required: true, trim: true},
          commentary: {type: String, trim: true},
        }

      }
    }
  }
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