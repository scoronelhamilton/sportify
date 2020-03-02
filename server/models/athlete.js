const Athlete = require('../db/schema');

exports.getAll = () =>
  Athlete.find()
    .then(data => data)
    .catch(err => {
      throw new Error(err);
    });

exports.add = info => Athlete.create(info);

exports.update = (id, info) => Athlete.updateOne({ _id: id }, info);
