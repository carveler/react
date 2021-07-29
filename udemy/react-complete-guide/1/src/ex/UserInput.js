import React from 'react';

export default function UserInput(props) {
  return (
    <div>
      <input type='text' onChange={props.onChange} />
    </div>
  );
}

// /////////answer
// import React from 'react';
// const userInput = () => <input type='text' />;

// export default userInput;
