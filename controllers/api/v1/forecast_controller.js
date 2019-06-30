// forecastController
var application = require('./index.js');
var WeatherService = require('../../../services/weather_service.js');
var WeatherSerializer = require('../../../serializers/weather_serializer.js');
var User = application.user;

async function index(req, res) {
  let user = await User.findOne({where: {apiKey: req.body.apiKey || null }});
  if (user) {
    let [city, state] = req.query.location.split(',');

    let weather = new WeatherService(city, state);
    let results = await weather.nextWeek();
    res.status(200).send(WeatherSerializer.parse(results));
  } else {
    res.status(401).send({ error: 'Invalid API key' });
  }
};


module.exports = {
  index: index
}
