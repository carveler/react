const initialState = {
  items: [],
};
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const exist = state.items.find((item) => item.id === action.payload.id);
      console.log('action.payload', action.payload);
      if (!exist) {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
        };
      } else
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : { ...item }
          ),
        };

    case 'DECREASE':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty !== 1 ? item.qty - 1 : 1 }
            : { ...item }
        ),
      };

    case 'DELETE_ITEM':
      console.log(state.items);
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'EMPTY_BASKET':
      return { ...state, items: [] };

    default:
      return state;
  }
  return <div></div>;
};
