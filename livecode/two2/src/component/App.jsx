import React from 'react';

import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';
import '../css/App.css';

function App() {
  const name = 'john';
  const age = 20;
  const email = 'gmail@gmail.com';
  return (
    <>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 name={name} age={age} email={email} />
    </>
  );
}

export default App;
