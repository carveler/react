import React, { useState, useRef, useEffect } from 'react';
import Postlist from './Postlist';
const { v4: uuidv4 } = require('uuid');
// const Local_Storege_Key = 'postApp.posts';

function App5() {
  const initialValues = {
    name: '',
    price: '',
    supermarket: '',
  };
  const [values, setValues] = useState(initialValues);
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const storedPosts = JSON.parse(localStorage.getItem(Local_Storege_Key));
  //   if (storedPosts) setPosts(storedPosts);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem(Local_Storege_Key, JSON.stringify(posts));
  // }, [posts]);

  function togglePost(id) {
    const newPosts = [...posts];
    const post = newPosts.find((post) => post.id === id);
    post.delete = !post.delete;
    setPosts(newPosts);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    setPosts([...posts, values]);
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // function handleChange(e) {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   if (value === '') return;
  //   setValues((prevValues) => {
  //     console.log(posts);
  //     return [...prevValues, { id: uuidv4(), [name]: value, complete: false }];
  //   });
  // }

  function handleClearPosts() {
    const newPosts = posts.filter((post) => !post.delete);
    setPosts(newPosts);
  }

  return (
    <>
      <Postlist
        className='post_container'
        posts={posts}
        togglePost={togglePost}
      />
      <form className='input_container' onSubmit={handleClearPosts}>
        <label>
          商品名：
          <input
            type='text'
            name='name'
            value={posts.name}
            onChange={changeHandler}
            // onChange={(e) => handleAddPost(e)}
          ></input>
        </label>
        <label>
          値段：
          <input
            type='text'
            name='price'
            value={posts.price}
            onChange={changeHandler}

            // onChange={(e) => handleAddPost(e)}
          ></input>
        </label>
        <label>
          スーパー：
          <input
            type='text'
            name='supermarket'
            value={posts.supermarket}
            onChange={changeHandler}

            // onChange={(e) => handleAddPost(e)}
          ></input>
        </label>
        <button type='submit' onClick={submitHandler}>
          Add Post
        </button>
        <button onClick={handleClearPosts}>Delete Post</button>
      </form>
    </>
  );
}

export default App5;
