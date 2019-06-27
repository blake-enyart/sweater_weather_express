// sessionsController
var index = require('./index.js');
var User = require('../../../models').user;

function create(req, res) {
  User.findOne({where: {email: req.body.email }})
  .then(user => {
    let hash = user.password;

    index.bcrypt.compare(req.body.password, hash)
    .then(function(passwordConfirmation) {
      if (passwordConfirmation) {
        res.setHeader("Content-Type", "application/json");
        res.status(201).send(JSON.stringify({ apiKey: user.apiKey }));
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send({ error: 'Invalid credentials'});
      };
    })
  })
};

module.exports = {
  create: create
}
