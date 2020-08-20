import { call, put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { signIn, signOut } from '../services/signer';

export default {
  namespace: "signer",
  state: {
    isLogin: false,
    userInfo: {}
  },
  effects: {
    *main() {
      yield takeEvery('signer/signin', this.signIn);
    },
    *signIn(action) {
      const { loginName } = action.payload;
      yield put({ type: 'showLoading' });
      const res = yield call(signIn, loginName); // promise
      console.log(res);
      // if(res && res.success) {
      //   let userInfo = res.data;
      //   yield sessionStorage.setItem('@INFO', JSON.stringify(userInfo));
      //   yield put({ 
      //     type: ActionTypes.SIGNER_SIGN_IN,
      //     payload: userInfo
      //   });
      //   resolve();
      // }else {
      //   reject(data);
      // }
    },
    *signOut({ payload }) {
      const { resolve, reject } = payload;
      const res = yield call(signOut);
      if(res && res.success) {
        yield sessionStorage.removeItem('@INFO');
        yield put({
          type: ActionTypes.SIGNER_SIGN_OUT
        });
        resolve(); // maybe history to login
      }else {
        reject(data)
      }
    }
  },
  reducers: {
    signInSuccess(state, action) {
      const userInfo = Object.assign({}, action.payload);
      return {...state, userInfo: userInfo, isLogin: true};
    },
    signOutSuccess(state) {
      return { ...state, userInfo: {}, isLogin: false }
    }
  }
}