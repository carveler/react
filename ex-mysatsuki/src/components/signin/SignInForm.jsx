import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Card, TextField } from '@material-ui/core';
import { addItem } from '../../actions/basketActions';

export const SignInForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const allUsers = useSelector((state) => state.authReducer.users);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (data) => {
    // e.preventDefault();  do not need it for react hook form
    const exist = allUsers.find((user) => user.email === data.email);
    if (exist) return alert('you are alredy registered');
    setFormSubmitted(true);
    dispatch(addItem(data));

    // [e.target.name]: e.target.value,
  };

  return (
    <>
      {/* {formSubmitted && (
        <SignUpConfirmation setFormSubmitted={setFormSubmitted} />
      )} */}
      <Container component='main' maxWidth='xs'>
        <Card>
          <form style={{ margin: '2rem' }} onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              ref={emailRef}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              ref={passwordRef}
            />

            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign In
            </Button>
            <div>You do not have an account? Sign up</div>
          </form>
        </Card>
      </Container>
    </>
  );
};
