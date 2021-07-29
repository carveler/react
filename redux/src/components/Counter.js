import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../actions/counterAction';
const Counter = () => {
  const counterState = useSelector((count) => count.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className='counter'>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <h1>Counter {counterState}</h1>
    </div>
  );
};

export default Counter;
