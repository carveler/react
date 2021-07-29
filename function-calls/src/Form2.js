import React from 'react';

export default function Form({
  name,
  age,
  email,
  changeHandler,
  submitHandler,
}) {
  return (
    <div>
      <form autoComplete='off'>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          onChange={(e) => changeHandler(e)}
        ></input>
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={(e) => changeHandler(e)}
        ></input>
        <input
          type='text'
          name='age'
          value={age}
          placeholder='age'
          onChange={(e) => changeHandler(e)}
        ></input>

        <button
          onKeyPress={(e) => submitHandler(e)}
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
