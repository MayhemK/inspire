import { api } from "../utils/Axios.js";
import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";



class TodoService {
  async toggleTodo(todoId) {
    event.preventDefault
    const todo = AppState.todo.find(todo => todo.id == todoId)
    todo.completed = !todo.completed
    const response = await api.put(`api/todos/${todoId}`, todo)
    console.log(response.data);
    // AppState.emit('todo')

  }
  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('deleted task', response.data);
    console.log(todoId);
    const todo = AppState.todo
    const todoIndex = todo.findIndex(todo => todo.id == todoId)
    todo.splice(todoIndex, 1)

  }
  async getTodo() {
    const response = await api.get('api/todos')
    const todos = response.data.map(pojo => new Todo(pojo))
    AppState.todo = todos
  }

  async createTodo(formData) {
    const response = await api.post('api/todos', formData)
    // console.log('created todo task', response.data);
    const todo = new Todo(response.data)
    AppState.todo.push(todo)
    console.log(response.data);


  }
}

export const todoService = new TodoService()