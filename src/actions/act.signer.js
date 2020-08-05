import * as ActionTypes from './actionTypes';

export const getSignerCaptcha = () => ({
  [ActionTypes.APP_FETCH]: {
    types: [ActionTypes.APP_FECTH_PENDING, ActionTypes.SIGNER_GET_CAPTCHA, ActionTypes.APP_FETCH_FAILURE],
    endpoint: '/user/code/get/img',
  }
});

export const signerSignIn = (values) => {
  let { loginName, password, code } = values
  const timestamp = new Date().getTime()
  
  return {
    [ActionTypes.APP_FETCH]: {
      types: [ActionTypes.APP_FECTH_PENDING, ActionTypes.SIGNER_SIGN_IN, ActionTypes.APP_FETCH_FAILURE],
      endpoint: '/user/login',
      options: {
        method: 'POST',
        body: { loginName, password, code, timestamp }
      }
    }
  }
};

export const signerSignUp = () => ({
  [ActionTypes.APP_FETCH]: {
    types: [ActionTypes.APP_FECTH_PENDING, ActionTypes.SIGNER_SIGN_OUT, ActionTypes.APP_FETCH_FAILURE],
    endpoint: '/user/logout',
    options: { method: 'POST' }
  }
});

export const signerEditPwd = (values) => ({
  [ActionTypes.APP_FETCH]: {
    types: [ActionTypes.APP_FECTH_PENDING, ActionTypes.SIGNER_EDIT_PWD, ActionTypes.APP_FETCH_FAILURE],
    endpoint: '/user/changePassword',
    options: { method: 'POST', body: values }
  }
});

export const signerVerify = (userinfo) => ({
  type: ActionTypes.SIGNER_VERIFY,
  payload: userinfo
});