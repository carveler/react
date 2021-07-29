import React, { useState } from 'react';
const MultipleCheckboxes = () => {
  const [checkboxes, setCheckboxes] = useState({
    box1: false,
    box2: false,
    box3: false,
  });
  const checkboxHandler = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };
  return (
    <section className='multiple-checkboxes'>
      <div className='multi-container'>
        <h4>
          Checkbox one
          {checkboxes.box1 ? <span>true</span> : <span>false</span>}
        </h4>
        <h4>
          Checkbox two
          {checkboxes.box2 ? <span>true</span> : <span>false</span>}
        </h4>
        <h4>
          Checkbox three
          {checkboxes.box3 ? <span>true</span> : <span>false</span>}
        </h4>
      </div>
      <label>Checkbox one</label>
      <input
        type='checkbox'
        name='box1'
        checked={checkboxes.box1}
        onChange={checkboxHandler}
      />
      <label>Checkbox two</label>
      <input
        type='checkbox'
        name='box2'
        checked={checkboxes.box2}
        onChange={checkboxHandler}
      />
      <label>Checkbox three</label>
      <input
        type='checkbox'
        name='box3'
        checked={checkboxes.box3}
        onChange={checkboxHandler}
      />
    </section>
  );
};
export default MultipleCheckboxes;
