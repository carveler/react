import React, { useState, useEffect, useRef } from 'react';

export default function App2() {
  const [name, setName] = useState('');

  const countRef = useRef(1);
  const previousNameRef = useRef('');

  useEffect(() => {
    countRef.current = countRef.current + 1;
    // return () => {
    //     cleanup
    // }
  }, [name]);
  useEffect(() => {
    previousNameRef.current = name; // return () => {
    //     cleanup
    // }
  }, [name]);
  //   const inputRef = useRef();
  //   useEffect(() => {
  //     inputRef.current.focus();
  //     inputRef.current.style.backgroundColor = 'lightblue';
  //     inputRef.current.className = 'input';
  //     //     return () => {
  //     //       cleanup;
  //     //     };
  //     //   }, [input]);
  //   });
  return (
    <div>
      <h1>hello</h1>
      <h2>useref</h2>
      <input
        value={name}
        type='text'
        onChange={(e) => setName(e.taget.value)}
      />
      <h2>{name}</h2>
      <p>rendered {countRef.current} times</p>
      <p>
        previous name was {previousNameRef.current} with a length of {''}
      </p>
      <form>
        <input type='text' />
        <input type='text' />
        <input type='text' />
      </form>
    </div>
  );
}
