
import { Identity } from './Auth/Identity.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from './models/Todo.js'

class ObservableAppState extends EventEmitter {
  /** @type {Identity} */
  identity = null
  /**@type {Todo[]} */
  todo = []

}

export const AppState = createObservableProxy(new ObservableAppState())