/**
 * store 管理
 * 1. 配置 middlewares, sagaMiddlewares promiseMiddlewares
 * 2. 获取model.effects
 * 3. 获取model.reducers
 * 4. 获取model.subscribe
 * 5. 导出model 挂载方法
 * 6. 执行得到最终 redux-store 并导出
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware(); // saga 中间件
const promiseMiddleware = createPromisMiddleware(); // promise 中间件

/**
 * create redux store by models.
 * @param {Array<Model: (namepace, state, ?effects, reducers)>} models
 * @returns {*} store
 */
function create(models) {
  const sagas = [];
  const reducers = {};

  for (const m of models) {
    reducers[m.namespace] = getReducer(m.reducers, m.state, plugin._handleActions);
    if (m.effects) {
      sagas.push(getSaga(m.effects, m, onError, plugin.get('onEffect'), hooksAndOpts));
    }
  }

  const store = createStore({
    reducers: createReducer(),
    initialState: hooksAndOpts.initialState || {},
    createOpts,
    sagaMiddleware,
    promiseMiddleware,
  });
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

  const unlisteners = {};
  for (const m of models) {
    if (m.subscriptions) {
      unlisteners[m.namespace] = runSubscription(m.subscriptions, m, app, onError);
    }
  }

  sagas.forEach(sagaMiddleware.run);
  return store;
}

function getReducer(reducers, modelState) {

}

function getSaga(effect, model) {

}

// createStore(
//   createRootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

export default create;

