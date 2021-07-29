import React, { useState } from 'react';
import Form from './Form';
import './App.css';
import DisplayForm from './DisplayForm';

function App() {
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

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <div className='App'>
      <main>
        <h1>Function Calls</h1>
        <Form
          name={formData.name}
          age={formData.age}
          email={formData.email}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
        {submit && (
          <DisplayForm
            name={formData.name}
            age={formData.age}
            email={formData.email}
          />
        )}
      </main>
    </div>
  );
}

export default App;
