import React, { useReducer } from 'react';
import { addToArrayReducer } from './reducers/addToArrayReducer';
export default function App3() {
  const [name, dispatchName] = useReducer(nameReducer, '');
  const [array, dispatchArray] = useReducer(addToArrayReducer, []);

  const addToArray = (e) => {
    e.preventDefault();
    dispatchArray({ type: 'add', payload: name });
    dispatchName({ type: 'reset' });
  };

  return (
    <div>
      <h1>{name}</h1>
      <form>
        <button></button>
        <button></button>
      </form>
    </div>
  );
}
