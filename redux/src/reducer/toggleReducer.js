const toggleReducer = (toggle = false, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !toggle;
    default:
      return toggle;
  }
};

export default toggleReducer;
