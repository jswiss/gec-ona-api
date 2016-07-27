const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  code: {type: String, trim: true, maxlength: 3},
  timestamps: true
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;