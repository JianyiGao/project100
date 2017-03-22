var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var seniorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  major: {
    type: String,
    required: false
  },
  headshot: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  youtube: {
    type: String,
    required: false
  },
  personalSite1: {
    type: String,
    required: false
  },
  pillar: {
    type: String,
    required: false
  },
  availableDate: {
    type: String,
    required: false
  },
  isWorking: {
    type: Boolean,
    required: false
  },
  isAlumnus: {
    type: Boolean,
    required: false
  },
  isGraduating: {
    type: Boolean,
    required: false
  }

});

var Senior = mongoose.model('Senior', seniorSchema);

module.exports = Senior;
