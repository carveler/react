import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Rate from './components/Rate';
import Postlist from './Postlist';
import Img from './components/Img';
import Image from './components/Image';
import Footer from './components/Footer';
import '.App.css';
const { v4: uuidv4 } = require('uuid');
const Local_Storege_Key = 'postApp.products';
const headerTitle = { title: '海外食材辞典' };
const footerItem = { copy: '©', year: 2021, name: '海外食材辞典' };

function App() {
  const initialValues = {
    name: '',
    price: '',
    supermarket: '',
    country: '',
    rating: '',
    comment: '',
    img: '',
  };
  const [values, setValues] = useState(initialValues);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedproducts = JSON.parse(localStorage.getItem(Local_Storege_Key));
    if (storedproducts) setProducts(storedproducts);
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storege_Key, JSON.stringify(products));
  }, [products]);

  function togglePost(id) {
    const newproducts = [...products];
    const post = newproducts.find((post) => post.id === id);
    post.delete = !post.delete;
    setProducts(newproducts);
  }

  ////post has clicked
  const submitHandler = (e) => {
    e.preventDefault();
    setProducts([...products, values]);
  };

  //////input has changed run this function
  function changeHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    if (value === '') return;
    setValues({ ...values, id: uuidv4(), [name]: value, complete: false });
  }
  ////////clear post
  function handleClearproducts() {
    const newproducts = products.filter((post) => !post.delete);
    setProducts(newproducts);
  }

  return (
    <>
      <Header headerTitle={headerTitle} />

      <ul className='products_container'>
        <Postlist
          className='post_container'
          products={products}
          togglePost={togglePost}
        />
      </ul>
      <div className='form-container'>
        <form onSubmit={handleClearproducts}>
          <label>
            商品名：
            <input
              type='text'
              name='name'
              value={products.name}
              placeholder='商品名'
              onChange={changeHandler}
              // onChange={(e) => handleAddPost(e)}
            ></input>
          </label>
          <label>
            値段：
            <input
              type='text'
              name='price'
              value={products.price}
              onChange={changeHandler}
              // onChange={(e) => handleAddPost(e)}
              placeholder='値段'
            ></input>
          </label>
          <label>
            スーパー：
            <input
              type='text'
              name='supermarket'
              value={products.supermarket}
              placeholder='スーパー'
              onChange={changeHandler}
              // onChange={(e) => handleAddPost(e)}
            ></input>
          </label>
          <Dropdown
            type='text'
            name='country'
            value={products.country}
            changeHandler={changeHandler}
          />
          <label>
            おすすめ：
            <Rate
              type='text'
              name='rating'
              value={products.rating}
              changeHandler={changeHandler}
            />
          </label>
          <label>
            コメント：
            <textarea
              type='text'
              name='comment'
              value={products.comment}
              placeholder='コメント'
              onChange={changeHandler}
              // onChange={(e) => handleAddPost(e)}
            ></textarea>
          </label>

          <Img
            type='file'
            name='img'
            src={products.img}
            value={products.img}
            changeHandler={changeHandler}
          />
          <Image
            type='file'
            name='img'
            src={products.img}
            value={products.img}
            changeHandler={changeHandler}
          />
          <button type='submit' onClick={submitHandler}>
            Add Post
          </button>
          <button onClick={handleClearproducts}>Delete Post</button>
        </form>
      </div>

      <Footer footerItem={footerItem} />
    </>
  );
}

export default App;
