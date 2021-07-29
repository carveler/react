import React from 'react';

export default function Post({ post, togglePost }) {
  function handlePostClick() {
    togglePost(post.id);
  }
  return (
    <div className='posts_container'>
      <label>
        <input
          type='checkbox'
          checked={post.delete}
          onChange={handlePostClick}
        />
        <p>商品名：{post.name}</p>
        <p>値段：{post.price}</p>
        <p>スーパー：{post.supermarket}</p>
      </label>
    </div>
  );
}
