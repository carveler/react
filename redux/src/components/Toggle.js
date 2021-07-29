import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../actions/toggleAction';
const Toggle = () => {
  const toggleState = useSelector((toggle) => toggle.toggleReducer);

  const dispatch = useDispatch();
  return (
    <div>
      {toggleState ? (
        <aside className='light'></aside>
      ) : (
        <aside className='dark'></aside>
      )}
      <button onClick={() => dispatch(toggle())}>toggle</button>
    </div>
  );
};

export default Toggle;
