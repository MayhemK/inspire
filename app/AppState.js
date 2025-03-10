
import { Identity } from './Auth/Identity.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from './models/Todo.js'
import { Image } from "./models/Image.js";
import { Weather } from './models/Weather.js';
import { Quote } from "./models/Quote.js";

class ObservableAppState extends EventEmitter {
  /** @type {Identity} */
  identity = null
  /**@type {Todo[]} */
  todo = []
  /**@type {Image[]} */
  Image = []
  /**@type {Quote} */
  Quote = null
  /**@type {Weather[]} */
  Weather = []

}

export const AppState = createObservableProxy(new ObservableAppState())