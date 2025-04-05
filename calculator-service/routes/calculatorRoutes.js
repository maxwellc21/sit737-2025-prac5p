const express = require('express');
const router = express.Router();
const { add, subtract } = require('../controllers/calculatorController');

router.post('/add', add);
router.post('/subtract', subtract);

module.exports = router;
