export class Quote {
  constructor(data) {
    this.quote = data.data.quote
    this.author = data.data.author
    this.source = data.data.source

  }

  get display() {
    return `
    <div>${this.quote}asdf</div>
    <div>${this.author}asdf</div>
    <div>${this.source}asdf</div>
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