import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import Product from '../components/Product';
import Form from '../components/Form';
const ProductList = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <main>
      <section className='form_container'>
        <Form />
      </section>
      <section className='products_container'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductList;
