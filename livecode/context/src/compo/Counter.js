import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Count() {
  const context = useContext(MyContext);

  const { count, setCount } = context;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
