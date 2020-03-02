const { Schema, model } = require('mongoose');

const athleteSchema = new Schema({
  name: String,
  birthDate: Date,
  nationality: String,
  location: String,
  association: String,
  team: String,
  gender: String,
  sports: [String],
  about: String,
  interests: [String],
  charities: [String],
  socialMediaHandles: {
    type: Map,
    of: String
  },
  pets: Boolean,
  drinksAlcohol: Boolean,
  married: Boolean
});

module.exports = model('Athlete', athleteSchema);
