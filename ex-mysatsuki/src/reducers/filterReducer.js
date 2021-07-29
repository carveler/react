import { SEARCH } from '../actions/filterActionType';

const initialState = '';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return (state = action.payload);
    default:
      return state;
  }
};
