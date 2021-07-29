import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Routes } from './routes/Routes';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <Routes />
    </StyledEngineProvider>
  </Provider>,
  document.getElementById('root')
);
