///import all action type *
import * as actions from './basketActionType';

export const addItem = (item) => {
  return {
    type: actions.ADD_ITEM,
    payload: item,
  };
};
export const decrease = (id) => {
  return {
    type: actions.DECREASE,
    payload: id,
  };
};
export const deleteItem = (id) => {
  return {
    type: actions.DELETE_ITEM,
    payload: id,
  };
};

export const emptyBasket = () => {
  return {
    type: actions.EMPTY_BASKET,
  };
};
