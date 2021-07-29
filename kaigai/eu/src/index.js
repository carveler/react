import React from 'react';
import ReactDOM from 'react-dom';
import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './routes/Routes';

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
