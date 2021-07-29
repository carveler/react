// import React, { useState, useRef, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

// export default function Login() {
//   const [formData, setFormData] = useState({ name: '', password: '' });
//   const [redirect, setRedirect] = useState('');

//   const inputRef = useRef();

//   const NAME = process.env.REACT_APP_NAME;
//   const PASSWORD = process.env.REACT_APP_PASSWORD;

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setRedirect(checkLoginInfo());
//   };

//   const checkLoginInfo = () => {
//     if (formData.name === NAME && formData.password === PASSWORD) {
//       return 'success';
//     } else {
//       return 'try again';
//     }
//   };

//   if (redirect === 'success') {
//     return <Redirect to={{ pathname: '/loggedIn', name: formData.name }} />;
//   } else if (redirect === 'try again') {
//     return <Redirect to={{ pathname: '/tryAgain', name: formData.name }} />;
//   }
//   return (
//     <div>
//       <h2>Please Log In</h2>

//       <form onSubmit={submitHandler}>
//         <input
//           type='text'
//           name='name'
//           value={formData.name}
//           placeholder='name'
//           ref={inputRef}
//           onChange={changeHandler}
//         ></input>
//         <input
//           type='password'
//           name='password'
//           value={formData.password}
//           placeholder='password'
//           onChange={changeHandler}
//         ></input>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }
import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState('');

  const inputRef = useRef();

  const EMAIL = process.env.REACT_APP_EMAIL;
  // const EMAIL = 'mami@gmail.com';
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setRedirect(checkLoginInfo());
  };

  const checkLoginInfo = () => {
    if (formData.email === EMAIL && formData.password === PASSWORD) {
      console.log('success');
      return 'success';
    } else {
      console.log('failed');

      return 'try again';
    }
  };

  if (redirect === 'success') {
    return <Redirect to={{ pathname: '/loggedIn', email: formData.email }} />;
  } else if (redirect === 'try again') {
    return <Redirect to={{ pathname: '/tryAgain', email: formData.email }} />;
  }

  console.log(formData);
  return (
    <div>
      <h2>Please Log In</h2>

      <form onSubmit={submitHandler}>
        <input
          type='email'
          name='email'
          value={formData.email}
          placeholder='email'
          ref={inputRef}
          onChange={changeHandler}
        ></input>
        <input
          type='password'
          name='password'
          value={formData.password}
          placeholder='password'
          onChange={changeHandler}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}
