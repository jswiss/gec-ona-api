const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true, unique: true, dropDups: true},
  code: {type: String, trim: true, maxlength: 3, uppercase: true},
  timestamps: true
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;