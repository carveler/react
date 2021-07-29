import React from 'react';

export default function ProductDetail(props) {
  console.log(props);
  const { author, description, title } = props.location.state.book;

  const params = props.match.params.isbn;
  console.log(params);
  //<Route path='/:handle' component={Profile} />
  //  const { handle } = props.match.params

  //   fetch(`https://api.twitter.com/user/${handle}`)
  return (
    <div>
      <section calssName='product-detail'>
        <p>
          <span>title:</span>
          {title}
        </p>
        <p>
          <span>author:</span>
          {author}
        </p>
        <p>
          <span>description:</span>
          {description}
        </p>
        <button onClick={props.history.goBack}>Take me back</button>
      </section>
    </div>
  );
}
