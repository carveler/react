import React from 'react';

export default function Barcode({ products, imageUrl }) {
  console.log(products);
  return (
    <div>
      {/* <h1>評価する</h1> */}

      {/* <h3>{products.product_name}</h3>
      <p>{products.product.brands}</p>
      <p>{products.product.countries}</p>
      <p>{products.product.stores}</p>
      <p>{products.product.image_thumb_url}</p>
      <img
        src={products.product.image_thumb_url}
        alt={products.product.image_thumb_url}
      />
      <img src={imageUrl} alt='uploaded' /> */}
    </div>
  );
}
