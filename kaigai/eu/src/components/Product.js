import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Product = ({ product }) => {
  const {
    id,
    barcode,
    poductname,
    poductname_jp,
    brand,
    price,
    store,
    country,
    rating,
    comment,
    img,
    favorite,
  } = product;

  const {
    toggleProduct,
    editProductHandler,

    addReviewsHandler,
    addCommentsHandler,
  } = useContext(ProductsContext);

  return (
    <div className='product'>
      <span onClick={() => toggleProduct(product)}>
        {favorite ? (
          <AiFillHeart color='red' size={25} />
        ) : (
          <AiOutlineHeart color='red' size={25} />
        )}
      </span>
      <p>商品名 Name：{poductname}</p>
      <p>値段 Price：{price}</p>
      <p>スーパー Store：{store}</p>
      <p>国 County：{country}</p>
      <button onClick={() => editProductHandler(product)}>edit</button>
      <button onClick={() => addReviewsHandler(product)}>add review</button>
      <button onClick={() => addCommentsHandler(product)}>add comments</button>
    </div>
  );
};

export default Product;
