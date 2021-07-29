import React, { useState } from 'react';

export default function App2() {
  ///////run only one time to use function in the state
  //   const [count, setCount] = useState(() => {
  //     console.log('run function');
  //     return 4;
  //   });

  //   const [state, setState] = useState({ count: 4, theme: 'blue' });
  const [theme, setTheme] = useState('blue');
  const [count, setCount] = useState(4);

  //   const count = state.count;
  //   const theme = state.theme;
  //   function decrementCount() {
  //     setState((prevState) => {
  //       return { ...prevState, count: prevState.count - 1 };
  //     });
  //   }
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme('red');
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
