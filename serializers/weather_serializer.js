class WeatherSerializer {
  static parse(weatherData) {
    let results = {
      todayForecast: this.currentForecast(weatherData.currently, weatherData),
      dailyForecast: {
        day_1: this.dailyForecast(weatherData.daily.data[1]),
        day_2: this.dailyForecast(weatherData.daily.data[2]),
        day_3: this.dailyForecast(weatherData.daily.data[3]),
        day_4: this.dailyForecast(weatherData.daily.data[4]),
        day_5: this.dailyForecast(weatherData.daily.data[5]),
        day_6: this.dailyForecast(weatherData.daily.data[6]),
        day_7: this.dailyForecast(weatherData.daily.data[7])
      },
      hourlyForecast: {
        hour_1: this.hourlyForecast(weatherData.hourly.data[1]),
        hour_2: this.hourlyForecast(weatherData.hourly.data[2]),
        hour_3: this.hourlyForecast(weatherData.hourly.data[3]),
        hour_4: this.hourlyForecast(weatherData.hourly.data[4]),
        hour_5: this.hourlyForecast(weatherData.hourly.data[5]),
        hour_6: this.hourlyForecast(weatherData.hourly.data[6]),
        hour_7: this.hourlyForecast(weatherData.hourly.data[7]),
        hour_8: this.hourlyForecast(weatherData.hourly.data[8])
      }
    };
    return results
  }

  static currentForecast(today, weatherData) {
    let current = {
      summary: today.summary,
      icon: today.icon,
      date: today.time,
      temperature: Math.round(today.temperature),
      high: Math.round(weatherData.daily.data[0].temperatureHigh),
      low: Math.round(weatherData.daily.data[0].temperatureLow),
      feelsLike: Math.round(today.apparentTemperature),
      humidity: (today.humidity * 100),
      visibility: today.visibility,
      uvIndex: today.uvIndex
    };
    return current
  }

  static dailyForecast(day_data) {
    let daily = {
      time: day_data.time,
      summary: day_data.summary,
      icon: day_data.icon,
      sunriseTime: day_data.sunriseTime,
      sunsetTime: day_data.sunsetTime,
      precipIntensity: day_data.precipIntensity,
      precipIntensityMax: day_data.precipIntensityMax,
      precipIntensityMaxTime: day_data.precipIntensityMaxTime,
      precipProbability: day_data.precipProbability,
      precipType: day_data.precipType,
      temperatureHigh: day_data.temperatureHigh,
      temperatureLow: day_data.temperatureLow,
      humidity: day_data.humidity,
      pressure: day_data.pressure,
      windSpeed: day_data.windSpeed,
      windGust: day_data.windGust,
      cloudCover: day_data.cloudCover,
      visibility: day_data.visibility,
      temperatureMin: day_data.temperatureMin,
      temperatureMax: day_data.temperatureMax
    };
    return daily
  }

  static hourlyForecast(hour_data) {
    let hour = {
      time: hour_data.time,
      summary: hour_data.summary,
      icon: hour_data.icon,
      precipIntensity: hour_data.precipIntensity,
      precipProbability: hour_data.precipProbability,
      temperature: Math.round(hour_data.temperature),
      humidity: hour_data.humidity,
      pressure: hour_data.pressure,
      windSpeed: hour_data.windSpeed,
      windGust: hour_data.windGust,
      windBearing: hour_data.windBearing,
      cloudCover: hour_data.cloudCover,
      visibility: hour_data.visibility
    };
    return hour
  }
}

module.exports = WeatherSerializer;
