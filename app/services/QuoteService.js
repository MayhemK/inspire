import { api } from "../utils/Axios.js";
import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";

class QuoteService {
  async getQuote() {
    const response = await api.get('api/quotes')
    console.log('got quote', response.data);
    const quote = new Quote(response.data)
    AppState.Quote = quote



  }
}

export const quoteService = new QuoteService()

