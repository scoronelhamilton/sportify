const router = require('express').Router();
const { validationRules, validate } = require('../validators/athletes');
const athletes = require('../controllers/athletes');

// Athletes
router.get('/athletes', athletes.getAll);
router.post('/athletes', validationRules(), validate, athletes.add);
router.put('/athletes/:id', athletes.update);

module.exports = router;
