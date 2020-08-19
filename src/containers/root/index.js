import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import createStore from '../store';

const store = createStore();

const Root = function() {
  return (
    <Provider store={store}>
      {/* 配置各种全局 provider, eg: Intl-local, context */}
      {/* 配置路由布局 */}
      <Router />
    </Provider>
  )
}

export default Root;