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
  website: {
    type: String,
    required: false
  }
});

var Senior = mongoose.model('Senior', seniorSchema);

module.exports = Senior;
