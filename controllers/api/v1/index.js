const express = require("express");

module.exports = {
  bcrypt: require('bcrypt'),
  saltRounds: 10,
  express: express,
  router: express.Router()
}
