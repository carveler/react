import React from 'react';
import Count from './compo/Count';
import Counter from './compo/Counter';
import MyContext from './context/MyContext';
import MyProvider from './context/MyProvider';

import './App.css';

function App() {
  return (
    <MyProvider>
      <div className='App'>
        <h1>context</h1>
        <Count />
        <Counter />
      </div>
    </MyProvider>
  );
}

export default App;
