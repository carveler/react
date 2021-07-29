import React, { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1>Do you like to drink?</h1>
      <div>
        <input
          type="checkbox"
          name="beer"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="beer">yes</label>
      </div>
      <h4>Drink beer? {checked ? <span>yes</span> : <span>no</span>}</h4>
    </>
  );
}
