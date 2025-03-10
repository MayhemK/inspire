import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
  constructor() {
    console.log('Quotes Loaded');
    this.getQuote()
    AppState.on('Quote', this.drawQuote)
  }
  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      Pop.error(error)
      console.error('dun goofed', error);


    }
  }

  drawQuote() {
    const quote = AppState.Quote
    let content = ''
    content += quote.display
    const quoteElem = document.getElementById('quote')
    quoteElem.innerHTML = content
    console.log(content);

  }

}