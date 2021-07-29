import React, { useState } from 'react';

const Dropdown = ({ changeHandler }) => {
  const [country, setCountry] = useState('Germany');
  const handleChange = (e) => {
    console.log(country);
    setCountry(e.target.value);
    changeHandler(e);
  };
  return (
    <section className='dropdown'>
      <label>
        国：
        <select
          name='country'
          value={country}
          onChange={(e) => handleChange(e)}
        >
          <option value='Germay'>Germay</option>
          <option value='England'>England</option>
          <option value='France'>France</option>
        </select>
      </label>
    </section>
  );
};

export default Dropdown;
