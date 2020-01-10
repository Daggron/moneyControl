const router = require('express').Router();
const moneyController = require('../controllers/money');

router.get('/',moneyController.get);

router.post('/data',moneyController.post);

module.exports = router;