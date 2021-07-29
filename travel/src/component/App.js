import React, { useState, useEffect } from 'react';
import WebCamList from './WebCamList';
import '../css/App.css';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY_WEBCAM;
  const [webCams, setWebCams] = useState([]);
  const [loading, setLoading] = useState(true);
  const country = 'IT';
  const category = 'resort';
  const URL = `https://api.windy.com//api/webcams/v2/list/country=IT/category=beach/orderby=popularity/limit=5?show=webcams:location,image&key=${API_KEY}`;

  // const URL = `https://api.windy.com//api/webcams/v2/list/country=${country}/category=${category}/orderby=popularity/limit=5?show=webcams:location,image&key=${API_KEY}`;
  // https://api.windy.com/api/webcams/v2/list/webcam=1361879037,1171032474?show=webcams:location,image&key=LrmyZSYmCDjwPKLe8OUsaoIkPbBOSRlp
  // const URL = `https://api.windy.com/api/webcams/v2/list/webcam=1361879037,1171032474?show=webcams:location,image&key=${API_KEY}`;

  //api.windy.com/api/webcams/v2/
  // /api/webcams/v2/list/country=IT/category=beach/orderby=popularity/limit=20?show=webcams:location,image

  // https://api.windy.com/api/webcams/v2/list/webcam=1361879037?show=webcams:location,image&key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (response.status === 404) {
          console.log('404');
          return '404';
        }

        const data = await response.json();
        setWebCams(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
    return () => {
      setWebCams([]);
    };
  }, [URL]);

  if (loading) return 'Loading...';
  return (
    <div className='App'>{!loading && <WebCamList webCams={webCams} />}</div>
  );
}
export default App;
