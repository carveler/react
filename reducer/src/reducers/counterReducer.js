export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return (state = 0);
    default:
      return state;
  }
};
