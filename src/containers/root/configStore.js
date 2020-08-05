import { createStore, applyMiddleware, compose } from 'redux';

// import thunkMiddleware from '../../middleware/thunk'
// import apiMiddleware from '../../middleware/api'
import createRootReducer from '../../reducers'

const store = createStore(
  createRootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

