
export class Todo {
  constructor(data) {
    this.completed = data.completed || false
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }

  get TodoCard() {
    return `
    
    `
  }
}