import React, { useState, useEffect, useRef, useCallback } from 'react';
import PhotoList from './PhotoList';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${pageNumber}&per_page=10
 `;

  const pageEnd = useRef();
  const options = useRef({ root: null, rootMargins: '0px', threshold: 1 });
  useEffect(() => {
    const fetachData = async (URL) => {
      try {
        const response = await fetch(URL);
        // if (response.status === 404) {
        // 	// currently it goes back to the homepage
        // 	handleReset();
        // 	return;
        // }
        const data = await response.json();

        ///delete duplicate clean
        setPhotos((prevPhotos) => {
          return [...new Set([...prevPhotos, ...data])];
        });
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetachData(URL);
    return () => {
      setPhotos([]);
    };
  }, [URL]);

  const loadMore = () => setPageNumber((prevPageNumber) => prevPageNumber + 1);

  const handleIntersect = useCallback((entries) => {
    if (entries[0].isIntersecting) loadMore();
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        handleIntersect,
        options.current
      );
      observer.observe(pageEnd.current);
    }
  }, [handleIntersect, loading]);

  return (
    <div className='App'>
      {!loading && <PhotoList photos={photos} />}
      <footer ref={pageEnd}></footer>
    </div>
  );
}

export default App;
