import React, { useState, useReducer } from 'react';
import Header from './components/Header';
// import BarcodeInput from './components/BarcodeInput';
import { useFetch } from './hooks/useFetch';
import { initialValues } from './const/initialValues';
import Form from './components/Form';
import { ACTIONS } from './const/actions';

// import postReducer from './reducers/postReducer';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  ///input form
  // const [inputFormData, setInputFormData] = useState(initialValues);

  ///store input form Product
  // const [products, setProducts] = useState([]);

  ///barcode Submit true/false
  const [barcodeSubmitStatus, setBarcodeSubmitStatus] = useState(false);
  // const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
  // const { data, loading, error } = useFetch(url);

  // const inputChangeHandler = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   if (name) {
  //     setInputFormData((prevInputFormData) => ({
  //       ...prevInputFormData,
  //       [name]: value,
  //       id: prevInputFormData.barcode,
  //     }));

  //     // dispatch({
  //     //   type: "ACTION_INPUT_CHANGE",
  //     //   payload: { [e.target.name]: e.target.value }
  //     // });
  //     // setError('');
  //   } else {
  //     // setError('正しく入力してください');
  //   }
  // };
  return (
    <div className='App'>
      <Header />
      {/* <BarcodeInput
        // inputChangeHandler={inputChangeHandler}
        setBarcodeSubmitStatus={setBarcodeSubmitStatus}
      /> */}
      {/* {barcodeSubmitStatus && ( */}
      <Form />
      {/* )} */}
      <Footer />
    </div>
  );
}

export default App;
