//useRef
import React, { useState, useEffect, useRef } from 'react';

export default function App4() {
  const [name, setName] = useState('');
  //   const [renderCount, setRenderCount] = useState(0);
  //   const renderCount = useRef(0);
  //   const inputRef = useRef();
  //   useEffect(() => {
  //     setRenderCount((prevRenderCount) => prevRenderCount + 1);
  //   });
  //   useEffect(() => {
  //     renderCount.current = renderCount.current + 1;
  //   });

  const prevName = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  //   function focus() {
  //     // console.log(inputRef.current);
  //     inputRef.current.focus();
  //   }
  return (
    <div>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and before {prevName.current}
      </div>
      {/* <button onClick={focus}>Focus</button> */}
      {/* <div>I rendered {renderCount.current} times</div> */}
    </div>
  );
}
