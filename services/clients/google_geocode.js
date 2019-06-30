var application = require('./index.js')
var Location = require('../../models').location;

class GoogleGeocode {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  coordinates() {
    return Location.findOne({
      where: {
        city: this.city, state: this.state
      }
    })
    .then(cityInDb => {
      let latitude
      let longitude

      if (cityInDb) {
        latitude = cityInDb.latitude;
        longitude = cityInDb.longitude;
      } else {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.city},${this.state}&key=${process.env.google_geocoding_key}`

        return application.fetch(url)
        .then(response => response.json())
        .then(coordinates => {
          latitude = coordinates.results[0].geometry.location.lat;
          longitude = coordinates.results[0].geometry.location.lng;

          Location.create({
            city: this.city,
            state: this.state,
            latitude: latitude,
            longitude: longitude
          });

          return {latitude: latitude, longitude: longitude}
        })
      }

      return {latitude: latitude, longitude: longitude}
    })
  }
}

module.exports = GoogleGeocode;
