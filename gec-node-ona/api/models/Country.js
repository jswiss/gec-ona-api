const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  code: {type: String, trim: true, maxlength: 3, uppercase: true},
  timestamps: {type: Date}
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;