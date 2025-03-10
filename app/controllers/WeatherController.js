import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";

export class WeatherController {
  constructor() {
    console.log('Weather Loaded');
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {

    }
  }

  drawWeather() {
    const weather = AppState.Weather
    let content = ''
    weather.forEach(weather => content += weather.tile)
    const weatherElem = document.getElementById('weather')
    weatherElem.innerText = content
  }
}