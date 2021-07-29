import React from 'react';
import Post from './Post';

export default function Postlist({ posts, togglePost }) {
  return posts.map((post) => {
    return <Post key={post.id} togglePost={togglePost} post={post} />;
  });
}
