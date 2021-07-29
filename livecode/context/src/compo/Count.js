import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Count() {
  const context = useContext(MyContext);

  const { count } = context;

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
