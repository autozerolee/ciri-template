import React from 'react';
import { Provider, connect } from "react-redux";

import store from './configStore.js';

const mapStateToProps = (state) => ({ value: state.app.count });
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" }),
  onIncrementAsync: () => dispatch({ type: "INCREMENT_ASYNC" })
});

const _Counter = function({ value, onIncrement, onDecrement, onIncrementAsync }) {
  return (
    <div>
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      {' '}
      <button onClick={onIncrementAsync}>
        Async Increment
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(React.memo(_Counter));

const Root = function() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default Root;