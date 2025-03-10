import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  constructor() {
    this.getWeather()
    console.log('Weather Loaded');
    AppState.on('Weather', this.drawWeather)
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)

    }
  }

  drawWeather() {
    const weather = AppState.Weather
    let content = ''
    content += weather.tile
    const weatherElem = document.getElementById('weather')
    weatherElem.innerHTML = content
    console.log(content);


  }
}