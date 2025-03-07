import { AuthController } from "./Auth/AuthController.js";

class App {

  authController = new AuthController()

}

window['app'] = new App()


