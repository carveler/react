import React from 'react';

export default function LoggedIn(props) {
  return (
    <div>
      <h1>Welcome {props.location.email}</h1>
    </div>
  );
}
