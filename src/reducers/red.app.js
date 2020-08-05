import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  pending: false,
  error: '',
  config: null
}

const app = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ActionTypes.APP_FECTH_PENDING: {
      return Object.assign({}, state, { pending: true }); // 什么时候设置为false,请求成功？
    }
    case ActionTypes.APP_FETCH_FAILURE: {
      return Object.assign({}, state, { error: payload });
    }
    case ActionTypes.APP_RESET_ERROR: {
      return Object.assign({}, state, { config: payload }); // 此处可能存在对象引用
    }
    default: return state;
  }
}

export default app;