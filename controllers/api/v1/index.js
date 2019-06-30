const express = require("express");

module.exports = {
  bcrypt: require('bcrypt'),
  express: express,
  fetch: require('node-fetch'),
  router: express.Router(),
  saltRounds: 10,
  user: require('../../../models').user,
  weatherSerializer: require('../../../serializers/weather_serializer.js'),
  weatherService: require('../../../services/weather_service.js')
}
