const mongoose = require('mongoose');

const cowSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  type: {
  type: String,
  enum: ['Cow', 'Bull', 'Calf'],
  required: true
},
  tag: {
    type: String,
    match: /^[A-Z]\d+$/,
    required: true
  },
  birthYear: {
    type: Date,
    required: true
  },
  color: {
    type: String,
    enum: ["Black", "Brown", "Black White Face", "Brockle", "Red", "Gray"],
    required: true
  },
  notes: {
    type: String,
    default: ''
  },
  previousTags: {
    type: [String],
    default: []
  },
  vetVisits: {
    type: [Date],
    default: []
  },
  shotsGiven: {
    type: [String],
    default: []
  },
  soldCow: {
    type: Date,
    default: null
  },
  cowDied: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Cow', cowSchema);
