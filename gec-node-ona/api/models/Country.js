const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: String,
  code: { type:String, maxlength: 3 }
})