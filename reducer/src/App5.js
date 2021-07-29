import React, { useState, useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      // case 'increment':
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      // case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App5() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCount] = useState(0);

  const increment = () => {
    return dispatch({ type: 'increment' });
    // setCount((prevcount) => prevcount + 1);
  };
  const decrement = () => {
    dispatch({ type: 'decrement' });

    // setCount((prevcount) => prevcount - 1);
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      {/* <p>{count}</p> */}
      <p>{state.count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}
