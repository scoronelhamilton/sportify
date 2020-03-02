const athleteModel = require('../models/athlete');

exports.getAll = (req, res) => {
  athleteModel
    .getAll()
    .then(data => res.json({ athletes: data }))
    .catch(err => {
      res.sendStatus(404);
      console.error(err.message);
    });
};

exports.add = (req, res) => {
  const info = req.body;
  if (!info) return res.sendStatus(404);

  athleteModel
    .add(info)
    .then(() => res.sendStatus(201))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const info = req.body;
  if (!id || !info) return res.sendStatus(404);

  athleteModel
    .update(id, info)
    .then(() => res.sendStatus(204))
    .catch(err => {
      res.sendStatus(500);
      console.error(err.message);
    });
};
