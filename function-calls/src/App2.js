import React, { useState } from 'react';
import Form2 from './Form2';
import './App.css';
import DisplayForm from './DisplayForm';
import Checkbox from './Checkbox';
import DropDown from './DropDown';
import MultipleCheckboxes from './MultipleCheckboxes';
import Radio from './Radio';
function App2() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [email, setEmail] = useState('');

  // const nameHandler = (e) => setName(e.target.value);
  // const ageHandler = (e) => setAge(e.target.value);
  // const emailHandler = (e) => setEmail(e.target.value);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [submit, setSubmit] = useState(false);

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleKeyPress = (e) => {
    e.preventDefault();
    e.keycode === '13' && setSubmit(true);
  };
  return (
    <div className='App'>
      <main>
        <h1>Function Calls</h1>
        <Form2
          name={formData.name}
          age={formData.age}
          email={formData.email}
          changeHandler={changeHandler}
          handleKeyPress={handleKeyPress}
        />
        {submit && (
          <DisplayForm
            name={formData.name}
            age={formData.age}
            email={formData.email}
          />
        )}

        <DropDown />
        <Checkbox />
      </main>
    </div>
  );
}

export default App2;
