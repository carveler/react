const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + action.payload;
    case 'DECREMENT':
      return count - action.payload;
    case 'RESET':
      return (count = 0);
    default:
      return count;
  }
};

export default counterReducer;
