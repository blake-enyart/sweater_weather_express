var application = require('./index.js')

class GoogleGeocode {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  coordinates() {
    return application.fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city},${this.state}&key=${process.env.google_geocoding_key}`)
    .then(response => response.json())
    .then(coordinates => {
      let latitude = coordinates.results[0].geometry.location.lat;
      let longitude = coordinates.results[0].geometry.location.lng;
      return {latitude: latitude, longitude: longitude}
    })
  }
}

module.exports = GoogleGeocode;
