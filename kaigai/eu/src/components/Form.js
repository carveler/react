import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { useFetch } from '../hooks/useFetch';

const Form = () => {
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({ productname: '', brand: '' });
  const {
    inputChangeHandler,
    userInputedData,
    setUserInputedData,
    addProduct,
    showFormHandler,
    showForm,
    setShowForm,
    cancelBtnHandler,
    editInputData,
    setEditInputData,
    isEditing,
  } = useContext(ProductsContext);

  const {
    id,
    barcode,
    productname,
    productname_jp,
    brand,
    price,
    store,
    country,
    rating,
    comment,
    img,
  } = userInputedData;
  console.log('userInputedData', userInputedData);
  const url = `https://world.openfoodfacts.org/api/v0/product/${userInputedData.barcode}.json`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let result = await response.json();
        setProduct(result);
        console.log('result.product', result.product);

        setFormData({
          ...formData,
          productname: result.product.product_name,
          brand: result.product.brands,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  const handleFormInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className='form_container barcode'>
        <form className='barcode_form' onSubmit={(e) => showFormHandler(e)}>
          <input
            type='text'
            name='barcode'
            placeholder='please input barcode'
            value={barcode}
            onChange={(e) => inputChangeHandler(e)}
          ></input>
          <button>add product</button>
        </form>
      </section>
      {showForm && (
        <section className='form_container review'>
          <form
            className='review_form'
            onSubmit={(e) => addProduct(e, userInputedData)}
          >
            <section className='review_form_input'>
              <input
                type='text'
                placeholder='poductname 商品名を(現地語）を入力してください'
                value={formData.productname}
                name='productname'
                onChange={inputChangeHandler}
                required
              />
              <input
                type='text'
                placeholder='poductname_jp 商品名（日本語）を入力してください'
                value={productname_jp}
                name='productname_jp'
                onChange={inputChangeHandler}
                required
              />
              <input
                type='text'
                placeholder='brand ブランド'
                value={formData.brand}
                name='brand'
                onChange={handleFormInputs}
              />
              <input
                type='text'
                placeholder='price,値段'
                value={price}
                name='price'
                onChange={(e) => inputChangeHandler(e)}
              />
              <input
                type='text'
                placeholder='store 買える店'
                value={store}
                name='store'
                onChange={(e) => inputChangeHandler(e)}
              />
              <input
                type='text'
                placeholder='country,国'
                value={country}
                name='country'
                onChange={(e) => inputChangeHandler(e)}
              />
              <input
                type='text'
                value={rating}
                name='rating'
                onChange={(e) => inputChangeHandler(e)}
              />
              <input
                type='text'
                value={comment}
                placeholder='comment コメント'
                name='comment'
                onChange={(e) => inputChangeHandler(e)}
              />
              {/* <img
                src={data.product.image_thumb_url}
                alt={data.product.image_thumb_url}
              ></img> */}
              <button type='submit'>
                {!isEditing ? 'Post Products' : 'Edit Product'}
                {/* レビューを投稿する */}
              </button>
              <button onClick={(e) => cancelBtnHandler(e)}>cancel</button>
            </section>
          </form>
        </section>
      )}
    </div>
  );
};

export default Form;

// useEffect(() => {
//   //editItem : {title: string, id: number}
//   if (editItem) {
//     setTitle(editItem.title)
//     console.log(editItem)
//   } else {
//     setTitle('')
//   }
// }, [editItem])
