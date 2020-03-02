const { check, validationResult } = require('express-validator');

const validationRules = () => {
  return [
    check('name')
      .isString()
      .notEmpty(),
    check('birthDate').isISO8601(),
    check('nationality')
      .isString()
      .notEmpty(),
    check('location')
      .isString()
      .notEmpty(),
    check('association')
      .isString()
      .notEmpty(),
    check('team')
      .isString()
      .notEmpty(),
    check('gender')
      .isString()
      .notEmpty(),
    check('sports').isArray({ min: 1 }),
    check('about')
      .isString()
      .notEmpty(),
    check('interests').isArray({ min: 1 })
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  } else {
    return res.status(422).json({ errors: errors.array() });
  }
};

module.exports = {
  validationRules,
  validate
};
