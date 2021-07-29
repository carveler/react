import React, { useState, useEffect, useRef } from 'react';

export default function App6() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef('');
  ///renderCount return object {current:0}

  //////DO NOT DO infinite loop
  //   useEffect(() => {
  //     setRenderCount((prevRenderCount) => prevRenderCount + 1);
  //   }, );

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }
  ///access to previous value
  useEffect(() => (prevName.current = name), [name]);

  return (
    <div>
      <p>
        My Name is {name} and prev name was {prevName.current}
      </p>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={focus}>Focus</button>

      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}
