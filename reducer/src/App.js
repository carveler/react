import React, { useReducer } from 'react';
import './App.css';
import { counterReducer } from './reducers/counterReducer';

function App() {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => dispatchCounter({ type: 'increment', payload: 5 })}
      >
        increment
      </button>
      <button
        onClick={() => dispatchCounter({ type: 'decrement', payload: 1 })}
      >
        decrement
      </button>
      <button onClick={() => dispatchCounter({ type: 'reset' })}>reset</button>
    </div>
  );
}

export default App;
