import { ACTIONS } from '../constance/actions';

export const PostReducer = (products, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCTS:
      return [...products, { ...action.payload }];

    case ACTIONS.EDIT_PRODUCTS:
      return products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        } else return product;
      });

    case ACTIONS.TOGGLE_PRODUCTS:
      return products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, favorite: !product.favorite };
        } else return product;
      });
    default:
      return products;
  }
};

// function toggleTodo(id) {
//   const newTodos = [...todos]
//   const todo = newTodos.find(todo => todo.id === id)
//   todo.complete = !todo.complete
//   setTodos(newTodos)
// }
