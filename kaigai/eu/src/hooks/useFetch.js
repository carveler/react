import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let result = await response.json();
        if (result.error) {
          setLoading(false);
          return setError(result.error);
        }
        setData(result);
        setLoading(false);
        setError('');
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
