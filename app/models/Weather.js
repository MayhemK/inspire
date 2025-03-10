export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.icon = data.weather.icon
    this.main = data.weather[0].main
  }

  get fahrenheit() {
    return ((this.temp - 273.15) * 9 / 5 + 32).toFixed(0)
  }
  get celsius() {
    return (this.temp - 273.15).toFixed(0)

  }





  get tile() {
    return `
    <div class="">
              <h1 id="temperature" >${this.celsius}</h1>
              <p>${this.main}</p>
              <div class="sun-icon">
                <img src="${this.icon}" alt="weather Icon">
              </div>
            </div>
    `
  }

}

// {
//   "status": "200 ",
//   "data": {
//     "coord": {
//       "lon": -116.2035,
//       "lat": 43.6135
//     },
//     "weather": {
//       "0": {
//         "id": 804,
//         "main": "Clouds",
//         "description": "overcast clouds",
//         "icon": "04d"
//       },
//       "icon": "https://openweathermap.org/img/wn/04d.png"
//     },
//     "base": "stations",
//     "main": {
//       "temp": 288.1,
//       "feels_like": 286.54,
//       "temp_min": 286.14,
//       "temp_max": 288.63,
//       "pressure": 1015,
//       "humidity": 34,
//       "sea_level": 1015,
//       "grnd_level": 901
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 2.68,
//       "deg": 62,
//       "gust": 4.02
//     },
//     "clouds": {
//       "all": 91
//     },
//     "dt": 1741570043,
//     "sys": {
//       "type": 2,
//       "id": 2043419,
//       "country": "US",
//       "sunrise": 1741529231,
//       "sunset": 1741571013
//     },
//     "timezone": -21600,
//     "id": 5586437,
//     "name": "Boise",
//     "cod": 200,
//     "origin": "https://openweathermap.org"
//   }
// }