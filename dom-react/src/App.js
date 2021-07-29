import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = `https://fakerapi.it/api/v1/books
  `;

  //   https://fakerapi.it/en
  //   https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid

  //<Route path='/:handle' component={Profile} />
  //  const { handle } = this.props.match.params
  //   fetch(`https://api.twitter.com/user/${handle}`)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const results = await data.json();
      console.log(results);
      setBooks(results.data);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return (
    <Router>
      <div className='App'>
        <Routes books={books} loading={loading} />
      </div>
    </Router>
  );
}

// const Home = () => {
//   <div>
//     <h1>Home Page</h1>
//   </div>;
// };

export default App;
