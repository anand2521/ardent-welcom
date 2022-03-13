import { createStore } from 'redux'
import rootReducer from './containers/reducers'

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(rootReducer)

export default store
