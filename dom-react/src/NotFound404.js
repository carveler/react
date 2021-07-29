import React from 'react';
// import {useHistory} from 'react-router-dom'
export default function NotFound404(props) {
  console.log(props);
  return (
    <div>
      <h1>404</h1>
      <button onClick={() => props.history.goBack()}>Take me back</button>
      <button onClick={() => props.history.push('/')}>get me out here</button>
      <button onClick={() => props.history.push('/about')}>go to about</button>
      <button onClick={() => props.history.go(-1)}>Where am i </button>
    </div>
  );
}
