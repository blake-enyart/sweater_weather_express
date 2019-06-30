// usersController
var application = require('./index.js');
var User = require('../../../models').user;
var crypto = require('crypto');

function create(req, res) {
  let password = req.body.password;
  let passwordConfirmation = req.body.passwordConfirmation;

  if (password === passwordConfirmation) {
    createUser(req, res);
  } else {
    return 'Password mismatch';
  };
};

// unRESTful functions
function apiKeyGenerator() {
  return crypto.randomBytes(20).toString('hex');
};

function createUser(req, res) {
  application.bcrypt.hash(req.body.password, application.saltRounds, function(err, hash) {
      User.create({
        email: req.body.email,
        password: hash,
        apiKey: apiKeyGenerator()
      })
      .then(user => {
        res.setHeader("Content-Type", "application/json");
        res.status(201).send(JSON.stringify({ apiKey: user.apiKey }));
      })
      .catch(error => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).send({ error });
      });
  });
};

module.exports = {
  create: create
}
