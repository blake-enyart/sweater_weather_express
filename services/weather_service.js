var GoogleGeocode = require('./clients/google_geocode.js')
var DarkSky = require('./clients/dark_sky.js')

class WeatherService {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  geocodedLocation() {
    let geocode = new GoogleGeocode(this.city, this.state);
    return geocode.coordinates()
  }

  nextWeek() {
    return this.geocodedLocation().then(function(coordinates) {
      let darksky = new DarkSky(coordinates);
      return darksky.getWeather();
    })
  }
}

module.exports = WeatherService;
