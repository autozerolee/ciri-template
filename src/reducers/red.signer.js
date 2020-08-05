import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  isLogin: false,
}

const app = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ActionTypes.SIGNER_SIGN_IN:
    case ActionTypes.SIGNER_VERIFY: {
      return Object.assign({}, payload, { isLogin: true });
    }
    case ActionTypes.SIGNER_SIGN_OUT:
    case ActionTypes.SIGNER_EDIT_PWD: {
      return { isLogin: false };
    }
    case ActionTypes.SIGNER_GET_CAPTCHA:
    case ActionTypes.SINGER_SIGN_UP: 
    default: return state;
  }
}

export default app;