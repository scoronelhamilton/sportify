const athleteModel = require('../models/athlete');

exports.getAll = (req, res) => {
  athleteModel
    .getAll()
    .then(data => res.json(data))
    .catch(err => {
      res.sendStatus(404);
      console.error(`ERROR: ${err.message}`);
    });
};

exports.add = (req, res) => {
  const { info } = req.body;
  athleteModel
    .add(info)
    .then(() => res.sendStatus(201))
    .catch(err => {
      res.sendStatus(500);
      console.error(`ERROR: ${err.message}`);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { info } = req.body;
  athleteModel
    .update(id, info)
    .then(() => res.sendStatus(204))
    .catch(err => {
      res.sendStatus(500);
      console.error(`ERROR: ${err.message}`);
    });
};
