import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import createRootReducer from '../../reducers';
// import rootSaga from '../../actions/sagas';

const sagaMiddleware = createSagaMiddleware(rootSaga);

const store = createStore(
  createRootReducer,
  compose(
    // applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga);

export default store

