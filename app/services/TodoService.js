import { api } from "../utils/Axios.js";

class TodoService {
  async getTodo() {
    const response = await api.get('api/todos')
    console.log('got todo', response.data);

  }
}

export const todoService = new TodoService()