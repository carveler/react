import React from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const url = 'https://fakerapi.it/api/v1/books';
  const data = useFetch(url, { loading: true, data: null });

  if (!data || data.loading) {
    return 'Loading....';
  }
  const bookList = data.result.data.map((book) => {
    <li key={book.isbn}>
      <div>
        <p>
          <span>title:</span>
          {book.title}
        </p>
        <p>
          <span>Author:</span>
          {book.author}
        </p>
      </div>
    </li>;
  });
  return <div className='App'>{bookList}</div>;
}

export default App;
