import React, { useState } from 'react';
const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <section className='single-checkbox'>
      <h4>
        Single checkbox {checked ? <span>true</span> : <span>false</span>}
      </h4>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </section>
  );
};
export default Checkbox;
