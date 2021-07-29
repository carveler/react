import React, { useState } from "react";

function MultipleCheckboxes() {
  const [features, setFeatures] = useState({
    scales: false,
    horns: false,
    lives: false,
  });

  const handleCheckbox = (e) =>
    setFeatures({ ...features, [e.target.name]: e.target.checked });

  return (
    <>
      <h1>Select all the monster features you want</h1>
      <form>
        <div>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            checked={features.scales}
            onChange={handleCheckbox}
          />
          <label htmlFor="scales">Scales</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="horns"
            name="horns"
            checked={features.horns}
            onChange={handleCheckbox}
          />
          <label htmlFor="horns">Horns</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lives"
            name="lives"
            checked={features.lives}
            onChange={handleCheckbox}
          />
          <label htmlFor="lives">Multiple Lives</label>
        </div>
        <h3>
          Features selected: {features.scales && "scales"}{" "}
          {features.horns && "horns"} {features.lives && "multiple lives"}{" "}
        </h3>
      </form>
    </>
  );
}

export default MultipleCheckboxes;
