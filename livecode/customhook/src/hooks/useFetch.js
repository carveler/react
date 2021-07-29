import { useState, useEffect } from 'react';

const useFetch = (url, response) => {
  const [data, setData] = useState(response);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData({ loading: false, result });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [url]);
  return data;
};
export default useFetch;
