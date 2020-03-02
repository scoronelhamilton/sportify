const router = require('express').Router();
const athletes = require('../controllers/athletes');

// Athletes
router.get('/athletes', athletes.getAll);
router.post('/athletes', athletes.add);
router.put('/athletes/:id', athletes.update);

module.exports = router;
