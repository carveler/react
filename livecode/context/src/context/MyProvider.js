import React, { useState } from 'react';
import MyContext from './MyContext';

export default function MyProvider(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyContext.Provider value={{ count, setCount }}>
        {props.children}
      </MyContext.Provider>
    </div>
  );
}
