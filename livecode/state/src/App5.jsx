import React, { useState } from 'react';
// import { styleOne, styleTwo } from 'style';
import './App.css';

const App5 = () => {
  const [change, setChange] = useState(false);

  const styleOne = {
    color: 'red',
    fontSize: '2.5rem',
    textTransform: 'uppercase',
  };
  const styleTwo = {
    color: 'blue',
    fontSize: '5rem',
    textTransform: 'italic',
  };
  return (
    <main>
      <h1 style={change ? styleOne : styleTwo}>Style</h1>
      <button
        onClick={() => setChange(!change)}
        style={{
          width: '200px',
          height: '40px',
          border: 'none',
          outline: 'none',
          backgroundColor: 'lightblue',
        }}
      ></button>
    </main>
  );
};

export default App5;
