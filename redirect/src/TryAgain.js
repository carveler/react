import React from 'react';

export default function TryAgain(props) {
  return (
    <div>
      <h1>You have not been verified {props.location.email}</h1>
    </div>
  );
}
