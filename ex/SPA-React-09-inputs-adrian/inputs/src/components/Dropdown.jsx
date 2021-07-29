import React, { useState } from "react";

export default function Dropdown() {
  const [select, setSelect] = useState("");
  return (
    <>
      <h1>Dropdown</h1>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="">--Choose a city--</option>
        <option value="Berlin">Berlin</option>
        <option value="London">London</option>
        <option value="Madrid">Madrid</option>
      </select>

      <h4>
        City selected: <span>{select ? select : "none"} </span>
      </h4>
    </>
  );
}
