import { api } from "../utils/Axios.js"
import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";

class WeatherService {
  async getWeather() {
    const response = await api.get('api/weather')
    console.log('got weather', response.data);
    const weather = response.data.map(pojo => new Weather(pojo))
    AppState.Weather = weather
  }
}

export const weatherService = new WeatherService
