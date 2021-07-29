import React, { useState } from 'react';
import './App.css';

const App3 = () => {
  const [counter, setCounter] = useState(1);
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <main>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increment{counter}
      </button>
      {/* <button onClick={() => setCounter(counter - 1)}>Decrement</button> */}
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        Decrement{counter}
      </button>
      <button onClick={resetCounter}>Reset</button>
    </main>
  );
};

export default App3;
