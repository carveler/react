// import { useContext, useEffect } from 'react';
// import MyContext from '../context2/MyContext';

// const FetchData = () => {
//   const context = useContext(MyContext);
//   const { dispatchData, setLoading, setError } = context;

//   const URL = 'https://jsonplaceholder.typicode.com/users/';

//   useEffect(() => {
//     setLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await fetch(URL);
//         if (response.status === 404) {
//           return '404';
//         }
//         const data = await response.json();
//         dispatchData({ type: 'ADD_DATA', payload: data });
//       } catch (error) {
//         console.error(error.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//     // return () => {
//     // clean
//     // };
//   }, [URL, dispatchData, setLoading, setError]);
// };

// export default FetchData;

/////////////
import { useContext, useEffect } from 'react';
import MyContext from '../context2/MyContext';
const FetchData = () => {
  const context = useContext(MyContext);
  const { dispatchData, setLoading, setError } = context;
  const URL = 'https://jsonplaceholder.typicode.com/users/';
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => dispatchData({ type: 'ADD_DATA', payload: data }))
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        err && setError(err);
      });
  }, [URL, dispatchData, setLoading, setError]);
  return null;
};
export default FetchData;
