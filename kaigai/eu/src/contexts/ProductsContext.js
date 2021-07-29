import React, { createContext, useReducer, useState, useEffect } from 'react';
import { PostReducer } from '../reducer/PostReducer';
import { initialValues } from '../constance/initialValues';
import { ACTIONS } from '../constance/actions';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  ///store userInput
  const [products, dispatch] = useReducer(PostReducer, []);

  ///user Input value
  const [userInputedData, setUserInputedData] = useState(initialValues);

  ///when add poduct pressed true
  const [showForm, setShowForm] = useState(false);

  ///edit button pressed true
  const [isEditing, setIsEditing] = useState(false);
  const [editInputData, setEditInputData] = useState(null);

  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(true);
  };
  const cancelBtnHandler = (e) => {
    setShowForm(false);
    setUserInputedData(initialValues);
  };
  const inputChangeHandler = (e) => {
    setUserInputedData({
      ...userInputedData,
      [e.target.name]: e.target.value,
      id: userInputedData.barcode,
    });
  };
  const editProductHandler = (product) => {
    setIsEditing(true);
    setEditInputData(product);
    setShowForm(true);
  };

  const addProduct = (e, payload) => {
    e.preventDefault();
    console.log('addproduct payload', payload);
    if (!isEditing) {
      dispatch({ type: ACTIONS.ADD_PRODUCTS, payload });
    } else {
      dispatch({ type: ACTIONS.EDIT_PRODUCTS, payload });
      setIsEditing(false);
    }
    setUserInputedData(initialValues);
    setShowForm(false);
  };

  /////change favorite status
  const toggleProduct = (payload) => {
    dispatch({ type: ACTIONS.TOGGLE_PRODUCTS, payload });
  };

  /////add review

  const addReviewsHandler = () => {};
  const addCommentsHandler = () => {};
  return (
    <ProductsContext.Provider
      value={{
        products,
        showForm,
        setShowForm,
        showFormHandler,
        userInputedData,
        setUserInputedData,
        inputChangeHandler,
        cancelBtnHandler,
        addProduct,
        isEditing,
        setIsEditing,
        editInputData,
        setEditInputData,
        editProductHandler,
        editInputData,
        toggleProduct,
        addReviewsHandler,
        addCommentsHandler,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
