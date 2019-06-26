var express = require('express');
var router = express.Router();
var usersController = require('../../../controllers/api/v1/users_controller.js');
const { check, validationResult } = require('express-validator');

/* Users CREATE */
router.post('/',
  [check('email').not().isEmpty().isEmail(),
  check('password').isLength({ min: 6 })],

  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  var pry = require("pryjs"); eval(pry.it);
  usersController.create(req, res);
});



module.exports = router;
