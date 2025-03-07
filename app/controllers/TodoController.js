import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";



export class TodoController {
  constructor() {
    console.log('TodoController Loaded!');
    AppState.on('identity', this.getTodos)
    AppState.on('todo', this.drawTodo)
  }

  drawTodo() {
    event.preventDefault()
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

  async createTodo() {
    try {
      event.preventDefault()
      const formElem = event.target
      const formData = getFormData(formElem)
      console.log(formData);
      await todoService.createTodo(formData)

    } catch (error) {
      console.log(error, 'whump whump');

      Pop.error(error)
    }
  }
}