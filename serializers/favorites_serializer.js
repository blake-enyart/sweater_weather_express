class FavoritesSerializer {
  static parse(favorites) {
    for (let [index, favorite] of favorites.entries()) {
      favorites[index] = {
        location: favorite.location,
        currentWeather: this.currentForecast(favorite.currentWeather.currently, favorite.currentWeather)
      }
    };

    return favorites;
  }

  static currentForecast(today, favorites) {
    let current = {
      summary: today.summary,
      icon: today.icon,
      date: today.time,
      temperature: Math.round(today.temperature),
      high: Math.round(favorites.daily.data[0].temperatureHigh),
      low: Math.round(favorites.daily.data[0].temperatureLow),
      feels_like: Math.round(today.apparentTemperature),
      humidity: (today.humidity * 100),
      visibility: today.visibility,
      uvIndex: today.uvIndex
    };
    return current
  }
}

module.exports = FavoritesSerializer;
