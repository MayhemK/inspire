import { api } from "../utils/Axios.js";
import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";


class TodoService {
  async getTodo() {
    const response = await api.get('api/todos')
    console.log('got todo', response.data);
    const todos = response.data.map(pojo => new Todo(pojo))
    AppState.todo = todos
  }
}

export const todoService = new TodoService()