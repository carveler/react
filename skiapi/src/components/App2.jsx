import React, { useState, useEffect } from 'react';
import '../css/App.css';
import Items from './Items';
// import clearIcon from '../assets/set/Clear.gif';
function App2() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const APP_ID = process.env.REACT_APP_APP_ID;
  const resort_id = 604021;
  const time = 'num_of_days=1';
  //num_of_days=(1-7で選ぶ)
  //hourly_interval=6
  const URL = `https://api.weatherunlocked.com/api/resortforecast/${resort_id}?${time}&app_id=${APP_ID}&app_key=${API_KEY}`;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (shouldFetch) {
      fetch(URL)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    // return () => {
    // setShouldFetch(false);
    // };
  }, [shouldFetch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // let icon = items.forecast[0].base.wx_icon;
    // console.log(`../assets/set/${icon}`);

    // let newSnow = items.forecast[0].base.freshsnow_cm;
    // console.log(newSnow);
    // let condition = items.forecast[0].base.wx_desc;
    // console.log(condition);

    // if (newSnow > 15)
    //   return <p> Wake up! Today is the Day. Let's Go Shredding!!!!</p>;
    // if ((newSnow = 0)) return <p> No New Snow</p>;

    return (
      <div className='App'>
        <main>
          <h1>Is it Pow today?</h1>
          <button
            onClick={() => {
              setShouldFetch(!shouldFetch);
            }}
          >
            Let's see
          </button>
          <div className='result_container'>
            {items.length === 0 ? '' : <Items items={items} />}
          </div>
        </main>
      </div>
    );
  }
}

export default App2;
