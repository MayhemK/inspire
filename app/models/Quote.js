export class Quote {
  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.source = data.source

  }

  get display() {
    return `
    <div>${this.quote}</div>
    <div>${this.author}</div>
    <div>${this.source}</div>
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