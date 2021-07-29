import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SIGNIN,
} from '../actions/authActionType';
const initialState = {
  users: [],
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload.data, id: nanoid() }],
      };

    case DELETE_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload.data, id: nanoid() }],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload.data, id: nanoid() }],
      };
    case SIGNIN:
      return {
        ...state,
        users: [...state.users, { ...action.payload.data, id: nanoid() }],
      };
  }

  return <div></div>;
}

export default authReducer;
