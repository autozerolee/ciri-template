import { combineReducers } from 'redux'

import app from './red.app';
import signer from './red.signer';
import users from './red.users';

export default combineReducers({
  app,
  signer,
  users,
})