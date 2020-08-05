import * as ActionTypes from '../actions/actionTypes';

const initialState = []

const app = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ActionTypes.USERS_GET_ALL: {
      return state.concat(payload);
    }
    // 这些 action 不触发 reducer
    case ActionTypes.USER_ADD:
    case ActionTypes.USER_EDIT:
    default: return state;
  }
}

export default app;