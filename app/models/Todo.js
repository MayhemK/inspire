
export class Todo {
  constructor(data) {
    this.completed = data.completed || false
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }

  get TodoCard() {
    return `
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="${this.completed}" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">${this.description}</label>
      </li>
    `
  }
}