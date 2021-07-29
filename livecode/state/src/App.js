import React, { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  // const [obj, setObj] = useState({ name: '', age: 0, email: '' });
  // setMode('dark');
  const changeMode = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  setTimeout(() => {
    changeMode();
  }, 3000);
  return (
    <main className={mode}>
      {mode === 'dark' ? <h1>Dark</h1> : <h1>Light</h1>}
    </main>
  );
}

export default App;
