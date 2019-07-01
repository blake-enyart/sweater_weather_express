const express = require("express");

module.exports = {
  bcrypt: require('bcrypt'),
  express: express,
  favoritesSerializer: require('../../../serializers/favorites_serializer.js'),
  fetch: require('node-fetch'),
  router: express.Router(),
  saltRounds: 10,
  user: require('../../../models').user,
  location: require('../../../models').location,
  weatherSerializer: require('../../../serializers/weather_serializer.js'),
  weatherService: require('../../../services/weather_service.js')
}
