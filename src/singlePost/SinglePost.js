import React from 'react';
import './SinglePost.css';

function SinglePost(props) {
  const { postData, onChange, onClick } = props;
  return (
    <div className="post">
      {!postData.title ? 'Loading...' : <h1>{postData.title}</h1>}
      <p className="post-content">{postData.body}</p>
      <button type="button" className="post-back " onClick={onClick}>Back to Posts</button>
      <button type="button" className="post-back " onClick={() => onChange('home')}>Back to home</button>
    </div>
  );
}

export default SinglePost;
