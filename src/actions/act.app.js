import * as ActionTypes from './actionTypes';

export const resetError = (error) => ({
  type: ActionTypes.APP_RESET_ERROR,
  payload: error
});