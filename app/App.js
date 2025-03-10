import { AuthController } from "./Auth/AuthController.js";
import { ImageController } from "./controllers/ImageController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { ClockController } from "./controllers/TimeController.js";
import { TodoController } from "./controllers/TodoController.js";
import { WeatherController } from "./controllers/WeatherController.js";

class App {

  authController = new AuthController()
  todoController = new TodoController()
  imageController = new ImageController()
  quoteController = new QuoteController()
  weatherController = new WeatherController()
  clockController = new ClockController
}

window['app'] = new App()


