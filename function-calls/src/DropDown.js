import React, { useState } from 'react';

const DropDown = () => {
  const [select, setSelect] = useState('Berlin');
  return (
    <section className='dropdown'>
      <h4>
        Dropdown selection list : <span>{select}</span> selected
      </h4>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value='Berlin'>Berlin</option>
        <option value='London'>London</option>
        <option value='Madrid'>Madrid</option>
      </select>
    </section>
  );
};

export default DropDown;
