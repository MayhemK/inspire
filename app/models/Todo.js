import { AppState } from "../AppState.js"
import { api } from "../utils/Axios.js"

export class Todo {
  constructor(data) {
    this.completed = data.completed || false
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }

  async createTodo(formData) {
    const response = await api.post('api/todos', formData)
    console.log('created todo task');
    const newTodo = new Todo(response.data)
    AppState.todo.push(newTodo)
    console.log(`${this.completed}`);

  }

  get TodoCard() {
    return `
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="${this.completed}" id="todoCheckbox" ${this.completed ? 'checked' : ''} onclick="app.todoController.toggleTodo('${this.id}')">
        <label class="form-check-label" for="todoCheckbox">${this.description}</label>
        <button onclick=app.todoController.deleteTodo('${this.id}') class="delete-buttom btn btn-danger">Delete</button>
      </li>
    `
  }
}


// get TodoCard() {
//   const isChecked = this.completed ? 'checked' : '';
//   return `
//     <li class="list-group-item">
//       <input class="form-check-input me-1" type="checkbox" ${isChecked} id="todoCheckbox" onclick="app.todoController.toggleTodo('${this.id}')">
//       <label class="form-check-label" for="todoCheckbox">${this.description}</label>
//       <button onclick=app.todoController.deleteTodo('${this.id}') class="delete-buttom btn btn-danger">Delete</button>
//     </li>
//   `;
// }