import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Product({ books, loading }) {
  // const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // const url = `https://fakerapi.it/api/v1/books
  // `;

  // //   https://fakerapi.it/en
  // //   https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid

  // //<Route path='/:handle' component={Profile} />
  // //  const { handle } = this.props.match.params
  // //   fetch(`https://api.twitter.com/user/${handle}`)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(url);
  //     const results = await data.json();
  //     console.log(results);
  //     setBooks(results.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [url]);

  if (loading) return 'Loading....';

  return (
    <div>
      <h1>Product</h1>
      {books.map((book) => (
        <Link
          key={book.isbn}
          to={{ pathname: `/productDetail`, state: { book: book } }} //isbn:book.isbn
        >
          <h4>{book.author} </h4>
        </Link>
      ))}
    </div>
  );
}
{
  /* <Link to={`/products/${book.isbn}`}>{book.author}</Link> */
}
