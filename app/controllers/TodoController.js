import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";


export class TodoController {
  constructor() {
    console.log('TodoController Loaded!');
    AppState.on('identity', this.getTodos)
  }

  async getTodos() {
    try {
      await todoService.getTodo()
    } catch (error) {
      console.error('could not do', error);

    }
  }
}