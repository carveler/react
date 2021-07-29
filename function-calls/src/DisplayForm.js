import React from 'react';

export default function DisplayForm({ name, age, email }) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
}
