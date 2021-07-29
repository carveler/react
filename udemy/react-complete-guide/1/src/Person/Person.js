import React from 'react';
import './Person.css';

export default function Person(props) {
  console.log(props.change);
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old
      </p>
      <input type='text' onChange={props.change} />
      <p>{props.children}</p>
    </div>
  );
}
