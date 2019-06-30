// forecastController
var application = require('./index.js');
var WeatherService = require('../../../services/weather_service.js');
var WeatherSerializer = require('../../../serializers/weather_serializer.js');

async function index(req, res) {
  let [city, state] = req.query.location.split(',');

  let weather = new WeatherService(city, state);
  let results = await weather.nextWeek();
  res.status(200).send(WeatherSerializer.parse(results));
};


module.exports = {
  index: index
}
