import React from 'react';

const Card = ({ title, img }) => {
  // const { title, name } = props;
  return (
    <aside className='card'>
      {/* <h2>{title}</h2>
      <p>{name}</p>
 */}
      <figure>
        <figcaption>{title}</figcaption>
        <img src={img} alt={img} className='card-image' />
      </figure>
    </aside>
  );
};

export default Card;
