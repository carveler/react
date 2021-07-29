import React, { useState } from "react";

function RadioButtons() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <h1>RadioButtons</h1>
      <p>Select your favorite series</p>
      <form>
        <div>
          <input
            type="radio"
            name="series"
            value="Succession"
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor="succession">Succession</label>
        </div>
        <div>
          <input
            type="radio"
            name="series"
            value="The Sopranos"
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor="sopranos">The Sopranos</label>
        </div>
        <div>
          <input
            type="radio"
            name="series"
            value="The Wire"
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor="wire">The Wire</label>
        </div>
      </form>
      <h3>Your favorite series is: {selected}</h3>
    </>
  );
}

export default RadioButtons;
