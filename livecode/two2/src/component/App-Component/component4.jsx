import React from 'react';
import Component5 from './component5';

const Component4 = ({ name, age, email }) => {
  return (
    <>
      <h2>Component4</h2>
      <Component5 name={name} age={age} email={email} />
    </>
  );
};

export default Component4;
