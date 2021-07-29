// import { initialValues } from '../const/initialValues';
import { ACTIONS } from '../const/actions';

const postReducer = (products, action) => {
  console.log(action.payload.name);
  switch (action.type) {
    // case ACTIONS_INPUT_CHANGE:
    //   return {
    //     ...products,
    //     input: {
    //       ...state.input,
    //       ...action.payload,
    //     }

    case ACTIONS.ADD_PRODUCTS:
      const newObject = action.payload;
      return [...products, newObject];

    default:
      return products;
  }
};

export default postReducer;

// switch (action.type) {
//   case 'field': {
//     return {
//       ...state,
//       [action.fieldName]: action.payload,
//     };
//   }
