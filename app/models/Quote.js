export class Quote {
  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.source = data.source

  }

  get display() {
    return `
    <div class="quote-container">
    <div>${this.quote}</div>
    <div class="hidden">${this.author}</div>
    <div class="hidden">${this.source}</div>
    </div>
    `
  }
}


// {
//   "status": "200 ",
//   "data": {
//     "quote": "Sometimes, the questions are complicated – and the answers are simple.",
//     "author": "L Lawliet",
//     "source": "Death Note"
//   }
// }