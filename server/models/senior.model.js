var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var seniorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true
  },
  gradYear: {
    type: String,
    required: false
  },
  major: {
    type: String,
    required: false
  },
  headshot: {
    type: String,
    required: true
  }
});

var Senior = mongoose.model('Senior', seniorSchema);

module.exports = Senior;
