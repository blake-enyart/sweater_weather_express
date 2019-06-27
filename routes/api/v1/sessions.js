var express = require('express');
var router = express.Router();
var sessionsController = require('../../../controllers/api/v1/sessions_controller.js');
const { check, validationResult } = require('express-validator');

/* Sessions CREATE */
router.post('/',
  (req, res) => {
  sessionsController.create(req, res);
});

module.exports = router;
