import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";


export class TodoController {
  constructor() {
    console.log('TodoController Loaded!');
    AppState.on('identity', this.getTodos)
    AppState.on('todo', this.drawTodo)
  }

  drawTodo() {
    const todo = AppState.todo
    let content = ''
    todo.forEach(todo => content += todo.TodoCard)
    const listElem = document.getElementById('todoTasks')
    listElem.innerHTML = content
  }


  async getTodos() {
    try {
      await todoService.getTodo()
    } catch (error) {
      console.error('could not do', error);

    }
  }
}