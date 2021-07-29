import React, { useState } from 'react';
const Radio = () => {
  const [radio, setRadio] = useState('Berlin');
  return (
    <section className='radio'>
      <h4>
        <span>{radio}</span> <p>Selected</p>
      </h4>
      <div className='multi-container'>
        <label>Berlin</label>
        <input
          type='radio'
          checked={radio === 'Berlin'}
          value='Berlin'
          onChange={(e) => setRadio(e.target.value)}
        />
        <label>London</label>
        <input
          type='radio'
          checked={radio === 'London'}
          value='London'
          onChange={(e) => setRadio(e.target.value)}
        />
        <label>Madrid</label>
        <input
          type='radio'
          checked={radio === 'Madrid'}
          value='Madrid'
          onChange={(e) => setRadio(e.target.value)}
        />
      </div>
    </section>
  );
};
export default Radio;
