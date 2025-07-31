// components/PostsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {items.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong><br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
