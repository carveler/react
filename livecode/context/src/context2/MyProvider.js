import React, { useState, useReducer } from 'react';
import MyContext from './MyContext';
import { dataReducer } from '../reducer/dataReducer';
export default function MyProvider(props) {
  const [data, dispatchData] = useReducer(dataReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [headerLogo] = useState('this is my logo');

  const [footerName] = useState('mami');

  return (
    <div>
      <MyContext.Provider
        value={{
          data,
          dispatchData,
          loading,
          setLoading,
          error,
          setError,
          headerLogo,
          footerName,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </div>
  );
}
