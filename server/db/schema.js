const { Schema, model } = require('mongoose');

const athleteSchema = new Schema({
  Name: String,
  BirthDate: Date,
  Nationality: String,
  Location: String,
  Association: String,
  Team: String,
  Gender: String,
  Sports: [String],
  About: String,
  Interests: [String],
  Charities: [String],
  socialMediaHandles: {
    type: Map,
    of: String
  },
  Pets: Boolean,
  DrinksAlcohol: Boolean,
  Married: Boolean
});

module.exports = model('Athlete', athleteSchema);
