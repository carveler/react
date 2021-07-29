import React, { useState, useEffect } from 'react';
import '../css/App.css';
import Items from './Items';
function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const APP_ID = process.env.REACT_APP_APP_ID;
  const resort_id = 604021;
  const time = 'num_of_days=1';
  //num_of_days=(1-7で選ぶ)
  //hourly_interval=6
  const URL = `https://api.weatherunlocked.com/api/resortforecast/${resort_id}?${time}&app_id=${APP_ID}&app_key=${API_KEY}`;

  const [items, setItems] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const items = await response.json();
        setItems(items);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [URL]);

  function handleSubmit(e) {
    e.preventDefault();
    setShouldFetch(true);
  }

  return (
    <div className='App'>
      <main>
        <h1>Is it Pow today? App</h1>
        <button onClick={(e) => handleSubmit(e)}>Let's see</button>
        <div className='result_container'>
          {shouldFetch && <Items items={items} />}
        </div>
      </main>
    </div>
  );
}

export default App;
