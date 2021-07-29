import * as actions from './authActionType';

export const addUser = (user) => {
  return {
    type: actions.ADD_USER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: actions.DELETE_USER,
    payload: id,
  };
};
export const updateUser = (id) => {
  return {
    type: actions.UPDATE_USER,
    payload: id,
  };
};

export const signIn = (id) => {
  return {
    type: actions.SIGNIN,
  };
};
