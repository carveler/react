import React, { useState } from 'react';
import './App.css';

const App4 = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <main>
      {/* {toggle ? <h1>This is somew text</h1> : null} */}
      {toggle && <h1>This is somew text</h1>}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
    </main>
  );
};

export default App4;
