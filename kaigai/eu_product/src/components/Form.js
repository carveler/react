import React, { useReducer, useState } from 'react';
import { ACTIONS } from '../const/actions';
import { initialValues } from '../const/initialValues';
const postReducer = (products, action) => {
  console.log('action.payload', action.payload);
  console.log('action', action);
  console.log(products);
  switch (action.type) {
    case ACTIONS.INPUT_CHANGE:
      return [{ ...action.payload }];
    // return action.ingredients;

    case ACTIONS.ADD_PRODUCTS:
      return [...products, { ...action.payload }];
    default:
      return products;
  }
};
// return [
//   ...todos,
//   { id: uuidv4(), title: action.payload.title, complete: false },
// ];
export default function Form() {
  const [barcodeSubmitStatus, setBarcodeSubmitStatus] = useState(false);
  const [formTextData, setFormTextData] = useState(initialValues);
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [products, dispatch] = useReducer(postReducer, [initialValues]);
  const {
    id,
    barcode,
    poductname,
    poductname_jp,
    brand,
    store,
    price,
    country,
    rating,
    comment,
    img,
    // barcodeSubmitStatus,
  } = products;

  const inputChangeHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    dispatch({
      type: ACTIONS.INPUT_CHANGE,
      payload: formTextData,
    });
    // dispatch({
    //   type: ACTIONS.INPUT_CHANGE,
    //   payload: { [e.target.name]: e.target.value },
    // });

    // dispatch({ type: 'SET', ingredients: filteredIngredients });

    setFormTextData((prevFormTextData) => ({
      ...prevFormTextData,
      id: formTextData.barcode,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formTextData);
  //   dispatch({
  //     type: ADD_TODO,
  //     payload: { title: titleRef.current.value, priority },
  //   });
  //   titleRef.current.value = '';
  // };

  const barcodeSubmit = (e) => {
    e.preventDefault();
  };

  const handlePostSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_PRODUCTS,
      payload: { [name]: value },
    });
    setPosts((prevPosts) => [...prevPosts, formTextData]);
    setBarcodeSubmitStatus(false);
    e.target.value = '';
    setFormTextData([initialValues]);
  };
  console.log('posts', posts);
  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(titleRef.current.value);
  //   dispatch({
  //     type: ACTIONS.ADD_TODO,
  //     payload: { title: titleRef.current.value },
  //   });
  //   titleRef.current.value = '';
  // };
  const editPostChangeHandler = (e) => {
    setFormTextData((prevFormTextData) => [
      ...prevFormTextData,
      { poductname: e.target.value },
    ]);
  };
  const editPostSubmitHandler = (e) => {
    e.preventDefault();
    setEditing(false);
  };
  return (
    <div className='form_container'>
      <section className='barcode_input_container'>
        <form onSubmit={barcodeSubmit}>
          <input
            type='number'
            placeholder='バーコードを入力してください'
            value={barcode}
            // onChange={(e) =>
            //   dispatch({
            //     type: 'ACTIONS.INPUT_CHANGE',
            //     fieldName: 'barcode',
            //     payload: e.currentTarget.value,
            //   })
            // }
            name='barcode'
            onChange={inputChangeHandler}
            required
          />
          　　　　
          <button type='submit'>レビューを追加する</button>
        </form>
        {/* {error && <div>{error}</div>} */}
      </section>
      {barcodeSubmitStatus && (
        <section className='review_form_container'>
          <form className='review_form' onSubmit={handlePostSubmit}>
            <section className='review_form_input'>
              <input
                type='text'
                placeholder='商品名を(現地語）を入力してください'
                value={poductname}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'poductname',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='poductname'
                onChange={inputChangeHandler}
                required
              />
              <input
                type='text'
                placeholder='商品名（日本語）を入力してください'
                value={poductname_jp}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'poductname_jp',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='poductname_jp'
                onChange={inputChangeHandler}
                required
              />

              <input
                type='text'
                placeholder='ブランド'
                value={brand}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'brand',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='brand'
                onChange={inputChangeHandler}
              />

              <input
                type='text'
                placeholder='値段'
                value={price}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'price',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='price'
                onChange={inputChangeHandler}
              />

              <input
                type='text'
                placeholder='買える店'
                value={store}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'store',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='store'
                onChange={inputChangeHandler}
              />

              <input
                type='text'
                placeholder='国'
                value={country}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'country',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='country'
                onChange={inputChangeHandler}
              />
              <input
                type='text'
                value={rating}
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'rating',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='rating'
                onChange={inputChangeHandler}
              />
              <input
                type='text'
                value={comment}
                placeholder='コメント'
                // onChange={(e) =>
                //   dispatch({
                //     type: ACTIONS.INPUT_CHANGE,
                //     fieldName: 'comment',
                //     payload: e.currentTarget.value,
                //   })
                // }
                name='comment'
                onChange={inputChangeHandler}
              />

              {/* <div className='image_upload_container'>
            <UploadImage />
          </div> */}
              <button type='submit'>レビューを投稿する</button>
            </section>
          </form>
        </section>
      )}
      <section className='post_container'>
        <ul>
          {posts.map((post) => (
            <li key={post.barcode}>
              {post.poductname}{' '}
              <button onClick={(e) => setEditing(true)}>edit</button>
            </li>
          ))}
        </ul>
      </section>
      {editing && (
        <section className='edit_container'>
          <p>edit {poductname} </p>
          <input onChange={editPostChangeHandler}></input>
          <button>cancle</button>
          <button onClick={editPostSubmitHandler}>save</button>
        </section>
      )}
    </div>
  );
}
