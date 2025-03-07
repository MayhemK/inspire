import { AuthController } from "./Auth/AuthController.js";

class App {

  authcontroller = new AuthController()

}

window['app'] = new App()


