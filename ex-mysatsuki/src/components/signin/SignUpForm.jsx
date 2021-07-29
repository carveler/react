import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Card, TextField } from '@material-ui/core';
import { addItem } from '../../actions/basketActions';
export const SignUpForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const allUsers = useSelector((state) => state.authReducer.users);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

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
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password Confirmation'
              type='password'
              id='password_confirm'
              autoComplete='current-password'
              ref={passwordConfirmRef}
            />
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign Up
            </Button>
            <div>Already have an account? Sign In</div>
          </form>
        </Card>
      </Container>
    </>
  );
};
