import { api } from "../utils/Axios.js"
import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";

class WeatherService {
  async getWeather() {
    const response = await api.get('api/weather')
    console.log('got weather', response.data);
    const weather = new Weather(response.data)
    AppState.Weather = weather
  }

  // isCelsius = true;
  // switchTemperature() {
  //   if (this.isCelsius) {
  //     document.getElementById('temperature').textContent = AppState.Weather.main;
  //   } else {
  //     document.getElementById("temperature").textContent = AppState.Weather.main
  //   }
  // }
}

export const weatherService = new WeatherService
