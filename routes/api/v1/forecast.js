var express = require('express');
var router = express.Router();
var forecastController = require('../../../controllers/api/v1/forecast_controller.js');
const { check, validationResult } = require('express-validator');

/* Forecast INDEX */
router.get('/', (req, res) => {
  forecastController.index(req, res);
});

module.exports = router;
