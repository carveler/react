import React, { useState } from 'react';
import './App.css';

const App2 = () => {
  const [name, setName] = useState('');
  const changeText = (event) => {
    setName(event.target.value);
    document.title = event.target.value;
  };
  return (
    <>
      <main>
        <h1>{name}</h1>
        <input
          //   onChange={(event) => {
          //     setName(event.target.value);
          //   }}
          onChange={changeText}
          type='text'
          value={name}
        />
      </main>
    </>
  );
};

export default App2;
