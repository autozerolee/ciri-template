import React from 'react';
import { Provider } from "react-redux";

import store from './configStore.js';

class Root extends React.Component {

  render() {
    console.log('root render!');
    // 默认展示 /app，若未验证，则跳转至 /login

    return (
      <Provider store={store}>
        <div>Root Containers</div>
      </Provider>
    )
  }
}

export default Root;