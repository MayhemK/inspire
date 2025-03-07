import { AuthController } from "./Auth/AuthController.js";
import { TodoController } from "./controllers/TodoController.js";

class App {

  authController = new AuthController()
  todoController = new TodoController()
}

window['app'] = new App()


