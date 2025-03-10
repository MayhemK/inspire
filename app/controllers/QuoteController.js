import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";

export class QuoteController {
  constructor() {
    console.log('Quotes Loaded');
    this.drawQuote()
  }
  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {

    }
  }

  drawQuote() {
    const quote = AppState.Quote
    let content = ''
    console.log(content, 'content here');
    quote.forEach(quote => content += quote.display)
    const quoteElem = document.getElementById('quote')
    quoteElem.innerHTML = content
  }
}