import { take, put, takeEvery, all, delay, select } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!');
}

// worker saga
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// watch saga
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// 记录所有 saga
function* watchAndLog() {
  while(true) {
    const action = yield take('*');
    const state = yield select();
    console.log('action---', action);
    console.log('state---', state);
  }
}

// 记录当 increment action 执行三次后 ，执行其他 action
function* watchFirstThreeOptions() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('INCREMENT')
  }
  yield put({type: 'SHOW_CONGRATULATION'})
}

function* rootSaga() {
  yield all([
    helloSaga(),
    watchAndLog(),
    watchFirstThreeOptions(),
    watchIncrementAsync()
  ])
}

export {
  rootSaga as default,
  incrementAsync
}
