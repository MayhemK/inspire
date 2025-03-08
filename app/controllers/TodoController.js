import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";



export class TodoController {
  constructor() {
    AppState.on('identity', this.getTodos)
    AppState.on('identity', this.drawTodo)
    AppState.on('identity', this.drawTodoButton)
  }

  drawTodo() {
    const todo = AppState.todo
    let content = ''
    todo.forEach(todo => content += todo.TodoCard)
    const listElem = document.getElementById('todoTasks')
    listElem.innerHTML = content
  }

  drawTodoButton() {
    document.getElementById('taskPlaceholder').classList.add('d-none')
    document.getElementById('taskButton').classList.remove('d-none')
  }

  // drawDelete()
  async toggleTodo(todoId) {
    try {
      await todoService.toggleTodo(todoId)
    } catch (error) {
      console.error(error);

    }
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

  async deleteTodo(todoId) {
    try {
      const confirmed = await Pop.confirm('Are you sure?', '', 'yerp', 'nah')
      if (!confirmed) {
        return
      }
      await todoService.deleteTodo(todoId)
    } catch (error) {
      console.error('nah fam', error);
      Pop.error(error, '😭 could not delete task 😭')

    }
  }
}