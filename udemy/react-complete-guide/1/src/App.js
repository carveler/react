import './App.css';
import Person from './Person/Person';
import React, { useState } from 'react';
function App() {
  // const persons = [
  //   { name: 'Max', age: 22 },
  //   { name: 'Mia', age: 23 },
  //   { name: 'Rena', age: 26 },
  // ];

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 22 },
      { name: 'Mia', age: 23 },
      { name: 'Rena', age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value');
  const switchNameHandler = (newName) => {
    // console.log('clicked');
    //  DO NOT DO THIS this.persons[0].name = 'Maximiliam';
    setPersonsState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Mia', age: 23 },
        { name: 'Rena', age: 33 },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'max', age: 22 },
        { name: event.target.value, age: 23 },
        { name: 'Rena', age: 33 },
      ],
    });
  };

  console.log(personsState, otherState);
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };
  return (
    <div className='App'>
      <h1>hi i am react</h1>
      <button onClick={() => switchNameHandler('maximiliam')} style={style}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        change={nameChangeHandler}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={() => switchNameHandler('Max!')}
      >
        i am a programmer
      </Person>
    </div>
  );
}

export default App;

// this.setState({
//   persons: [
//     { name: 'Max', age: 22 },
//     { name: 'Mia', age: 23 },
//     { name: 'Rena', age: 26 },
//   ],
// });
