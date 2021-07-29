import React, { useState } from 'react';
import UserOutput from './ex/UserOutput';
import './App.css';
import UserInput from './ex/UserInput';

function App2() {
  const [userName, newName] = useState('mami');
  const handleChange = (event) => {
    newName(event.target.value);
  };

  const style = {
    fontSize: '3rem',
    fontWeight: 600,
    border: '2px solid blue',
  };
  return (
    <div className='App'>
      <UserOutput style={style} name={userName} />
      <UserInput type='text' onChange={handleChange} />
    </div>
  );
}

export default App2;

////answer////////////////////////////////////////

// function App2() {
//   return (
//     <div className='App'>
//       <UserInput />
//       <UserOutput userName='Max' />
//     </div>
//   );
// }

// export default App2;
