var application = require('./index.js')

class DarkSky {
  constructor(coordinates) {
    this.latitude = coordinates.latitude;
    this.longitude = coordinates.longitude;
  }

  getWeather() {
    return application.fetch(`https://api.darksky.net/forecast/${process.env.dark_sky_api_key}/${this.latitude},${this.longitude}`)
    .then( response => response.json() )
  }
}

module.exports = DarkSky;
