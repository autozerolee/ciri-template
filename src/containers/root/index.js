import React from 'react';
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import createStore from '../store';
import signModel from '../../models/signer';
import systemModels from '../../models/system';

const store = createStore([signModel, systemModels]);

console.log(store);

const Root = function() {
  return (
    <Provider store={store}>
      {/* 配置各种全局 provider, eg: Intl-local, context */}
      {/* 配置路由布局 */}
      
      {/* <Router /> */}
      <Profile />
    </Provider>
  )
}
const mapStateToProps = ({ signer }) => ({ signer })
const Profile = connect(mapStateToProps)((props) => {
  const { signer, dispatch } = props;
  const onClickSignIn = () => {
    dispatch({
      type: 'signer/signin',
      payload: { loginName: "admin" }
    })
  };
  const onClickSignOut = () => {
    dispatch({
      type: 'signer/signout'
    })
  }
  return (
    <React.Fragment>
      <div>User: {signer.isLogin}</div>
      {
        !signer.isLogin 
        ? <button onClick={onClickSignIn}>登录</button>
        : <button onClick={onClickSignOut}>登出</button>
      }
    </React.Fragment>
  )
})



export default Root;