import * as ActionTypes from './actionTypes';

export const fetchUsersList = (params) => {
  return {
    [ActionTypes.APP_FETCH]: {
      types: [ActionTypes.APP_FECTH_PENDING, ActionTypes.USER_ADD, ActionTypes.APP_FETCH_FAILURE],
      endpoint: `/user`,
    }
  }
}

export const createUser = (values) => ({
  [ActionTypes.APP_FETCH]: {
    types: [ActionTypes.APP_FECTH_PENDING, ActionTypes.USERS_GET_ALL, ActionTypes.APP_FETCH_FAILURE],
    endpoint: '/user',
    options: { method: 'POST', body: values }
  }
})

